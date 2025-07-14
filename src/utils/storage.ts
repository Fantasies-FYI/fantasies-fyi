
import { UserProfile, UserAnswer, AnswerType } from "../data/sampleFantasies";
import CryptoJS from "crypto-js";
import { ExtendedUserProfile } from "@/types/user";

const USER_PROFILE_KEY = "fantasy-shared-hearts-profile";
const USER_ANSWERS_KEY = "fantasy-shared-hearts-answers";
const ENCRYPTION_SECRET = "fantasy-shared-hearts-secret-key";

// User Profile Functions
export const saveUserProfile = (profile: UserProfile | ExtendedUserProfile): void => {
  localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
};

export const getUserProfile = (): UserProfile | null => {
  const profileStr = localStorage.getItem(USER_PROFILE_KEY);
  if (!profileStr) return null;
  
  try {
    return JSON.parse(profileStr) as UserProfile;
  } catch (e) {
    console.error("Error parsing user profile:", e);
    return null;
  }
};

export const clearUserProfile = (): void => {
  localStorage.removeItem(USER_PROFILE_KEY);
};

// Answer Management Functions
export const saveUserAnswer = (fantasyId: number, answer: AnswerType): void => {
  const answers = getUserAnswers();
  const existingIndex = answers.findIndex(a => a.fantasyId === fantasyId);
  
  if (existingIndex >= 0) {
    answers[existingIndex].answer = answer;
  } else {
    answers.push({ fantasyId, answer });
  }
  
  localStorage.setItem(USER_ANSWERS_KEY, JSON.stringify(answers));
};

export const getUserAnswers = (): UserAnswer[] => {
  const answersStr = localStorage.getItem(USER_ANSWERS_KEY);
  if (!answersStr) return [];
  
  try {
    return JSON.parse(answersStr) as UserAnswer[];
  } catch (e) {
    console.error("Error parsing user answers:", e);
    return [];
  }
};

export const getUserAnswerForFantasy = (fantasyId: number): AnswerType => {
  const answers = getUserAnswers();
  const foundAnswer = answers.find(a => a.fantasyId === fantasyId);
  return foundAnswer ? foundAnswer.answer : null;
};

export const clearUserAnswers = (): void => {
  localStorage.removeItem(USER_ANSWERS_KEY);
};

export const clearCategoryAnswers = (category: string): void => {
  // This function would need to know which fantasy IDs belong to a category
  // For now, it's a placeholder
};

// Bit-wise encoding helper functions
const encodeAnswerToBits = (answer: AnswerType): number => {
  switch (answer) {
    case null: return 0;
    case "notInterested": return 1;
    case "interested": return 2;
    case "conditionally": return 3;
    default: return 0;
  }
};

const decodeAnswerFromBits = (bits: number): AnswerType => {
  switch (bits) {
    case 0: return null;
    case 1: return "notInterested";
    case 2: return "interested";
    case 3: return "conditionally";
    default: return null;
  }
};

const compressAnswers = (answers: UserAnswer[]): Uint8Array => {
  // Find the highest fantasy ID to determine array size
  const maxFantasyId = Math.max(...answers.map(a => a.fantasyId), 0);
  const answersArray = new Array(maxFantasyId + 1).fill(null);
  
  // Fill the array with actual answers
  answers.forEach(answer => {
    answersArray[answer.fantasyId] = answer.answer;
  });
  
  // Pack 4 answers (2 bits each) into each byte
  const bytes: number[] = [];
  for (let i = 0; i < answersArray.length; i += 4) {
    let byte = 0;
    for (let j = 0; j < 4 && (i + j) < answersArray.length; j++) {
      const answerBits = encodeAnswerToBits(answersArray[i + j]);
      byte |= (answerBits << (j * 2));
    }
    bytes.push(byte);
  }
  
  return new Uint8Array(bytes);
};

const decompressAnswers = (compressedData: Uint8Array): UserAnswer[] => {
  const answers: UserAnswer[] = [];
  
  for (let byteIndex = 0; byteIndex < compressedData.length; byteIndex++) {
    const byte = compressedData[byteIndex];
    
    for (let bitPairIndex = 0; bitPairIndex < 4; bitPairIndex++) {
      const fantasyId = byteIndex * 4 + bitPairIndex;
      const answerBits = (byte >> (bitPairIndex * 2)) & 0x03;
      const answer = decodeAnswerFromBits(answerBits);
      
      if (answer !== null) {
        answers.push({ fantasyId, answer });
      }
    }
  }
  
  return answers;
};

// Encryption and Sharing Functions
export const generateSharingCode = (): string => {
  const profile = getUserProfile();
  const answers = getUserAnswers();
  
  if (!profile || answers.length === 0) {
    return "";
  }
  
  // Create compact binary format
  const nameBytes = new TextEncoder().encode(profile.name);
  const genderBit = profile.gender === "male" ? 0 : 1;
  const compressedAnswers = compressAnswers(answers);
  
  // Format: [version(1)] [gender(1bit)+nameLength(7bits)] [name...] [answers...]
  const buffer = new Uint8Array(2 + nameBytes.length + compressedAnswers.length);
  let offset = 0;
  
  // Version byte
  buffer[offset++] = 2; // Version 2 for bit-wise encoding
  
  // Gender bit + name length (7 bits)
  buffer[offset++] = (genderBit << 7) | (nameBytes.length & 0x7F);
  
  // Name bytes
  buffer.set(nameBytes, offset);
  offset += nameBytes.length;
  
  // Compressed answers
  buffer.set(compressedAnswers, offset);
  
  // Convert to base64 and encrypt
  const base64Data = btoa(String.fromCharCode(...buffer));
  return CryptoJS.AES.encrypt(base64Data, ENCRYPTION_SECRET).toString();
};

export interface PartnerData {
  profile: {
    name: string;
    gender: "male" | "female";
  };
  answers: UserAnswer[];
}

export const decodePartnerCode = (code: string): PartnerData | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(code, ENCRYPTION_SECRET);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    
    // Try to parse as JSON first (legacy format)
    try {
      return JSON.parse(decryptedData) as PartnerData;
    } catch {
      // New binary format
      const binaryData = Uint8Array.from(atob(decryptedData), c => c.charCodeAt(0));
      
      if (binaryData.length < 2) {
        throw new Error("Invalid data format");
      }
      
      let offset = 0;
      const version = binaryData[offset++];
      
      if (version !== 2) {
        throw new Error("Unsupported version");
      }
      
      // Extract gender and name length
      const genderAndLength = binaryData[offset++];
      const gender = (genderAndLength & 0x80) ? "female" : "male";
      const nameLength = genderAndLength & 0x7F;
      
      // Extract name
      const nameBytes = binaryData.slice(offset, offset + nameLength);
      const name = new TextDecoder().decode(nameBytes);
      offset += nameLength;
      
      // Extract and decompress answers
      const answersData = binaryData.slice(offset);
      const answers = decompressAnswers(answersData);
      
      return {
        profile: { name, gender },
        answers
      };
    }
  } catch (e) {
    console.error("Error decoding partner code:", e);
    return null;
  }
};

// Shared Interests Analysis
export const getSharedInterests = (
  userAnswers: UserAnswer[],
  partnerAnswers: UserAnswer[]
): number[] => {
  const sharedInterestIds: number[] = [];
  
  userAnswers.forEach(userAnswer => {
    if (userAnswer.answer === "interested" || userAnswer.answer === "conditionally") {
      const partnerAnswer = partnerAnswers.find(
        pa => pa.fantasyId === userAnswer.fantasyId
      );
      
      if (
        partnerAnswer && 
        (partnerAnswer.answer === "interested" || partnerAnswer.answer === "conditionally")
      ) {
        sharedInterestIds.push(userAnswer.fantasyId);
      }
    }
  });
  
  return sharedInterestIds;
};
