
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

// Encryption and Sharing Functions
export const generateSharingCode = (): string => {
  const profile = getUserProfile();
  const answers = getUserAnswers();
  
  if (!profile || answers.length === 0) {
    return "";
  }
  
  const dataToShare = {
    profile: {
      name: profile.name,
      gender: profile.gender
    },
    answers
  };
  
  const jsonStr = JSON.stringify(dataToShare);
  return CryptoJS.AES.encrypt(jsonStr, ENCRYPTION_SECRET).toString();
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
    return JSON.parse(decryptedData) as PartnerData;
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
