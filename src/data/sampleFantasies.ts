
export type FantasyCategory = 
  | "Romantic Fantasies"
  | "Role Play"
  | "Locations"
  | "Positions"
  | "Accessories"
  | "Sensory Play"
  | "Outdoor Adventures"
  | "Spontaneous Encounters"
  | "Power Dynamics"
  | "Erotic Massage";

export type AnswerType = "interested" | "notInterested" | "conditionally" | null;

export interface CategoryColors {
  background: string;
  text: string;
  border: string;
}

export interface CategoryData {
  name: FantasyCategory;
  colors: CategoryColors;
}

export interface Fantasy {
  id: number;
  category: FantasyCategory;
  fantasy: {
    male: string;
    female: string;
    result: string; // Added result text
  };
}

export interface UserAnswer {
  fantasyId: number;
  answer: AnswerType;
}

export interface UserProfile {
  name: string;
  gender: "male" | "female";
  ageRange: "18-22" | "23-28" | "29-35" | "36-45" | "46-55" | "over55";
  partnerName: string;
  completedOnboarding: boolean;
}

export const categoryData: CategoryData[] = [
   {
    "name": "Anal",
    "colors": {
      "background": "#f9c74f",
      "text": "#ffffff",
      "border": "#f9c74f"
    }
  },
  {
    "name": "B.D.S.M",
    "colors": {
      "background": "#f9c74f",
      "text": "#ffffff",
      "border": "#f9c74f"
    }
  },
  {
    "name": "Group",
    "colors": {
      "background": "#f9c74f",
      "text": "#ffffff",
      "border": "#f9c74f"
    }
  },
  {
    "name": "Other Fetishes",
    "colors": {
      "background": "#f9c74f",
      "text": "#ffffff",
      "border": "#f9c74f"
    }
  },
  {
    "name": "Public",
    "colors": {
      "background": "#f9c74f",
      "text": "#ffffff",
      "border": "#f9c74f"
    }
  },
  {
    "name": "The Basics",
    "colors": {
      "background": "#f9c74f",
      "text": "#ffffff",
      "border": "#f9c74f"
    }
  },
  {
    "name": "Toys",
    "colors": {
      "background": "#f9c74f",
      "text": "#ffffff",
      "border": "#f9c74f"
    }
  }
];

export const getCategoryColors = (category: FantasyCategory): CategoryColors => {
  const found = categoryData.find(cat => cat.name === category);
  if (!found) {
    // Default colors if category not found
    return {
      background: "#1e293b",
      text: "#ffffff",
      border: "#1e293b"
    };
  }
  return found.colors;
};

const sampleFantasies: Fantasy[] = [
   {
    "id": 1,
    "category": "The Basics",
    "fantasy": {
      "male": "Enjoy longer teasing and foreplay sessions with {partnerNameFemale}",
      "female": "Enjoy longer teasing and foreplay sessions with {partnerNameMale}",
      "result": "Enjoy longer teasing and foreplay sessions"
    }
  },
  {
    "id": 2,
    "category": "The Basics",
    "fantasy": {
      "male": "Have a steamy phone sex session with {partnerNameFemale}",
      "female": "Have a steamy phone sex session with {partnerNameMale}",
      "result": "Have a steamy phone sex session"
    }
  },
  {
    "id": 3,
    "category": "The Basics",
    "fantasy": {
      "male": "Have sex with {partnerNameFemale} while keeping most of our clothes on",
      "female": "Have sex with {partnerNameMale} while keeping most of our clothes on",
      "result": "Have sex with while keeping most of our clothes on"
    }
  },
  {
    "id": 4,
    "category": "The Basics",
    "fantasy": {
      "male": "Slowly strip {partnerNameMale} completely",
      "female": "Let {partnerNameMale} slowly strip me completely",
      "result": "Slowly strip {partnerNameMale} completely"
    }
  },
  {
    "id": 5,
    "category": "The Basics",
    "fantasy": {
      "male": "Let {partnerNameFemale} slowly strip me completely",
      "female": "Slowly strip {partnerNameFemale} completely",
      "result": "Slowly strip {partnerNameFemale} completely"
    }
  },
  {
    "id": 6,
    "category": "The Basics",
    "fantasy": {
      "male": "Have {partnerNameFemale} give me a sensual massage",
      "female": "Give {partnerNameMale} a sensual massage",
      "result": "Give a sensual massage to {partnerNameMale}"
    }
  },
  {
    "id": 7,
    "category": "The Basics",
    "fantasy": {
      "male": "Give {partnerNameFemale} a sensual massage",
      "female": "Have {partnerNameMale} give me a sensual massage",
      "result": "Give a sensual massage to {partnerNameFemale}"
    }
  },
  {
    "id": 8,
    "category": "The Basics",
    "fantasy": {
      "male": "Blindfold {partnerNameFemale} during sex or foreplay",
      "female": "Be blindfolded by {partnerNameMale} during sex or foreplay",
      "result": "Blindfold {partnerNameFemale} during sex or foreplay"
    }
  },
  {
    "id": 9,
    "category": "The Basics",
    "fantasy": {
      "male": "Be blindfolded by {partnerNameFemale} during sex or foreplay",
      "female": "Blindfold {partnerNameMale} during sex or foreplay",
      "result": "Blindfold {partnerNameMale} during sex or foreplay"
    }
  },
  {
    "id": 10,
    "category": "The Basics",
    "fantasy": {
      "male": "Take sensual pictures of {partnerNameFemale}",
      "female": "Pose for sensual pictures taken by {partnerNameMale}",
      "result": "Take sensual pictures of {partnerNameFemale}"
    }
  },
  {
    "id": 11,
    "category": "The Basics",
    "fantasy": {
      "male": "Pose for sensual pictures taken by {partnerNameFemale}",
      "female": "Take sensual pictures of {partnerNameMale}",
      "result": "Take sensual pictures of {partnerNameMale}"
    }
  },
  {
    "id": 12,
    "category": "The Basics",
    "fantasy": {
      "male": "Take pictures of us having sex",
      "female": "Take pictures of us having sex",
      "result": "Take pictures of us having sex"
    }
  },
  {
    "id": 13,
    "category": "The Basics",
    "fantasy": {
      "male": "Have sex in reverse cowgirl position with {partnerNameFemale} on top, facing away",
      "female": "Be on top in reverse cowgirl position, facing away from {partnerNameMale}",
      "result": "Have sex in reverse cowgirl position with {partnerNameFemale} on top, facing away"
    }
  },
  {
    "id": 14,
    "category": "The Basics",
    "fantasy": {
      "male": "Use lube, flavoured or not, with {partnerNameFemale}",
      "female": "Use lube, flavoured or not, with {partnerNameMale}",
      "result": "Use lube, flavoured or not, together"
    }
  },
  {
    "id": 15,
    "category": "The Basics",
    "fantasy": {
      "male": "Strip or give {partnerNameFemale} a lap dance",
      "female": "Have {partnerNameMale} strip or give me a lap dance",
      "result": "Give a striptease or lap dance to {partnerNameFemale}"
    }
  },
  {
    "id": 16,
    "category": "The Basics",
    "fantasy": {
      "male": "Have {partnerNameFemale} strip or give me a lap dance",
      "female": "Strip or give {partnerNameMale} a lap dance",
      "result": "Give a striptease or lap dance to {partnerNameMale}"
    }
  },
  {
    "id": 17,
    "category": "The Basics",
    "fantasy": {
      "male": "Nibble {partnerNameFemale}'s earlobes",
      "female": "Have {partnerNameMale} nibble my earlobes",
      "result": "Nibble {partnerNameFemale}'s earlobes"
    }
  },
  {
    "id": 18,
    "category": "The Basics",
    "fantasy": {
      "male": "Have {partnerNameFemale} nibble my earlobes",
      "female": "Nibble {partnerNameMale}'s earlobes",
      "result": "Nibble {partnerNameMale}'s earlobes"
    }
  },
  {
    "id": 19,
    "category": "The Basics",
    "fantasy": {
      "male": "Have sex with {partnerNameFemale} in front of a mirror",
      "female": "Have sex with {partnerNameMale} in front of a mirror",
      "result": "Have sex in front of a mirror"
    }
  },
  {
    "id": 20,
    "category": "The Basics",
    "fantasy": {
      "male": "Wake {partnerNameFemale} up with sex or oral sex",
      "female": "Be woken up by {partnerNameMale} with sex or oral sex",
      "result": "Wake {partnerNameFemale} up with sex or oral sex"
    }
  },
  {
    "id": 21,
    "category": "The Basics",
    "fantasy": {
      "male": "Be woken up by {partnerNameFemale} with sex or oral sex",
      "female": "Wake {partnerNameMale} up with sex or oral sex",
      "result": "Wake {partnerNameMale} up with sex or oral sex"
    }
  },
  {
    "id": 22,
    "category": "The Basics",
    "fantasy": {
      "male": "Masturbate while watching {partnerNameFemale} do the same",
      "female": "Masturbate while watching {partnerNameMale} do the same",
      "result": "Masturbate while watching each other"
    }
  },
  {
    "id": 23,
    "category": "The Basics",
    "fantasy": {
      "male": "Watch porn with {partnerNameFemale}",
      "female": "Watch porn with {partnerNameMale}",
      "result": "Watch porn together with your partner"
    }
  },
  {
    "id": 24,
    "category": "The Basics",
    "fantasy": {
      "male": "Be shown what {partnerNameFemale} likes from porn",
      "female": "Show {partnerNameMale} what I like from porn",
      "result": "Show {partnerNameMale} what you like from porn"
    }
  },
  {
    "id": 25,
    "category": "The Basics",
    "fantasy": {
      "male": "Show {partnerNameFemale} what I like from porn",
      "female": "Be shown what {partnerNameMale} likes from porn",
      "result": "Show {partnerNameFemale} what you like from porn"
    }
  },
  {
    "id": 26,
    "category": "The Basics",
    "fantasy": {
      "male": "Be more vocal towards each other during sex",
      "female": "Be more vocal towards each other during sex",
      "result": "Be more vocal towards your partner during sex"
    }
  },
  {
    "id": 27,
    "category": "The Basics",
    "fantasy": {
      "male": "Talk dirtier to {partnerNameFemale}",
      "female": "Talk dirtier to {partnerNameMale}",
      "result": "Talk dirty to each other"
    }
  },
  {
    "id": 28,
    "category": "The Basics",
    "fantasy": {
      "male": "Roleplay with {partnerNameFemale}, with or without costumes",
      "female": "Roleplay with {partnerNameMale}, with or without costumes",
      "result": "Roleplay with together, with or without costumes"
    }
  },
  {
    "id": 29,
    "category": "The Basics",
    "fantasy": {
      "male": "Have {partnerNameFemale} wear stockings and high heels during sex",
      "female": "Wear stockings and high heels during sex for {partnerNameMale}",
      "result": "Have {partnerNameFemale} wear stockings and high heels during sex"
    }
  },
  {
    "id": 30,
    "category": "The Basics",
    "fantasy": {
      "male": "Listen to romantic music while having sex with {partnerNameFemale}",
      "female": "Listen to romantic music while having sex with {partnerNameMale}",
      "result": "Listen to romantic music while having sex"
    }
  },
  {
    "id": 31,
    "category": "The Basics",
    "fantasy": {
      "male": "Listen to more aggressive music (like rap or rock) while having sex with {partnerNameFemale}",
      "female": "Listen to more aggressive music (like rap or rock) while having sex with {partnerNameMale}",
      "result": "Listen to more aggressive music (like rap or rock) during sex"
    }
  },
  {
    "id": 32,
    "category": "The Basics",
    "fantasy": {
      "male": "Mutually masturbate with {partnerNameFemale}",
      "female": "Mutually masturbate with {partnerNameMale}",
      "result": "Mutually masturbate with your partner"
    }
  },
  {
    "id": 33,
    "category": "The Basics",
    "fantasy": {
      "male": "Slide my penis between {partnerNameFemale}'s breasts and feel her warmth around me",
      "female": "Let {partnerNameMale} slide his penis between my breasts and feel my warmth around him",
      "result": "Slide penis between {partnerNameFemale}'s breasts"
    }
  },
  {
    "id": 34,
    "category": "The Basics",
    "fantasy": {
      "male": "Do 69 with {partnerNameFemale}",
      "female": "Do 69 with {partnerNameMale}",
      "result": "Have 69 together"
    }
  },
  {
    "id": 35,
    "category": "The Basics",
    "fantasy": {
      "male": "Have {partnerNameFemale} swallow my cum",
      "female": "Swallow {partnerNameMale}'s cum",
      "result": "Swallow {partnerNameMale}'s cum"
    }
  },
  {
    "id": 36,
    "category": "The Basics",
    "fantasy": {
      "male": "Watch {partnerNameFemale} play with my cum using her fingers or body",
      "female": "Play with {partnerNameMale}'s cum using my fingers or body, teasing him as I do it",
      "result": "Play with {partnerNameMale}'s cum using fingers or body"
    }
  },
  {
    "id": 37,
    "category": "The Basics",
    "fantasy": {
      "male": "Cum over {partnerNameFemale}'s breasts or neck and watch it drip down her skin",
      "female": "Have {partnerNameMale} cum over my breasts or neck and feel it on my skin",
      "result": "Cum over {partnerNameFemale}'s breasts or neck"
    }
  },
  {
    "id": 38,
    "category": "The Basics",
    "fantasy": {
      "male": "Cum over {partnerNameFemale}'s face and watch it drip from her lips",
      "female": "Have {partnerNameMale} cum over my face and feel it dripping from my lips",
      "result": "Cum over {partnerNameFemale}'s face"
    }
  },
  {
    "id": 39,
    "category": "The Basics",
    "fantasy": {
      "male": "Have {partnerNameFemale} sit on my face and let me give her oral sex",
      "female": "Sit on {partnerNameMale}'s face and be given oral sex",
      "result": "Have {partnerNameFemale} sit on your face and receive oral sex"
    }
  },
  {
    "id": 40,
    "category": "The Basics",
    "fantasy": {
      "male": "Sit on {partnerNameFemale}'s face and be given oral sex",
      "female": "Have {partnerNameMale} sit on my face and let me give him oral sex",
      "result": "Have {partnerNameMale} sit on your face and receive oral sex"
    }
  },
  {
    "id": 41,
    "category": "The Basics",
    "fantasy": {
      "male": "Be rougher during sex with {partnerNameFemale}, taking more control",
      "female": "Be rougher during sex with {partnerNameMale}, taking more control",
      "result": "Be rougher during sex with your partner"
    }
  },
  {
    "id": 42,
    "category": "The Basics",
    "fantasy": {
      "male": "Call {partnerNameFemale} obscene or degrading words during sex",
      "female": "Call {partnerNameMale} obscene or degrading words during sex",
      "result": "Call your partner obscene or degrading words during sex"
    }
  },
  {
    "id": 43,
    "category": "The Basics",
    "fantasy": {
      "male": "Have sex with {partnerNameFemale} while she's on her period",
      "female": "Have sex while on my period with {partnerNameMale}",
      "result": "Have sex with {partnerNameFemale} while she's on her period"
    }
  },
  {
    "id": 44,
    "category": "The Basics",
    "fantasy": {
      "male": "Fist {partnerNameFemale} slowly and carefully",
      "female": "Be fisted by {partnerNameMale} slowly and carefully",
      "result": "Fist {partnerNameFemale} slowly and carefully"
    }
  },
  {
    "id": 45,
    "category": "Toys",
    "fantasy": {
      "male": "Watch {partnerNameFemale} use sex toys on herself while I watch and enjoy it",
      "female": "Use sex toys on myself while {partnerNameMale} watches and enjoys it",
      "result": "Watch {partnerNameFemale} use sex toys on herself"
    }
  },
  {
    "id": 46,
    "category": "Toys",
    "fantasy": {
      "male": "Use sex toys on myself while {partnerNameFemale} watches and enjoys it",
      "female": "Watch {partnerNameMale} use sex toys on himself while I watch and enjoy it",
      "result": "Watch {partnerNameMale} use sex toys on himself"
    }
  },
  {
    "id": 47,
    "category": "Toys",
    "fantasy": {
      "male": "Have {partnerNameFemale} use a dildo or vibrator during sex on herself or with me",
      "female": "Use a dildo or vibrator during sex with {partnerNameMale} on myself or with him",
      "result": "Use a dildo or vibrator during sex with {partnerNameFemale}"
    }
  },
  {
    "id": 48,
    "category": "Toys",
    "fantasy": {
      "male": "Use a spreader bar on {partnerNameFemale} during sex to hold her legs apart",
      "female": "Have {partnerNameMale} use a spreader bar on me during sex, keeping my legs apart",
      "result": "Use a spreader bar on {partnerNameFemale} during sex"
    }
  },
  {
    "id": 49,
    "category": "Toys",
    "fantasy": {
      "male": "Have {partnerNameFemale} use a spreader bar on me during sex, keeping my legs apart",
      "female": "Use a spreader bar on {partnerNameMale} during sex to hold his legs apart",
      "result": "Use a spreader bar on {partnerNameMale} during sex"
    }
  },
  {
    "id": 50,
    "category": "Toys",
    "fantasy": {
      "male": "Wear a cock ring (vibrating or non-vibrating) during sex with {partnerNameFemale}",
      "female": "Have {partnerNameMale} wear a cock ring (vibrating or non-vibrating) during sex",
      "result": "Have {partnerNameMale} wear a cock ring during sex"
    }
  },
  {
    "id": 51,
    "category": "Toys",
    "fantasy": {
      "male": "Have {partnerNameFemale} use a penis pump on me or watch as I use one for teasing and stimulation",
      "female": "Use a penis pump on {partnerNameMale} or watch him use it for teasing and stimulation",
      "result": "Use a penis pump on {partnerNameMale} for teasing and stimulation"
    }
  },
  {
    "id": 52,
    "category": "Toys",
    "fantasy": {
      "male": "Have {partnerNameFemale} wear nipple clamps during sex",
      "female": "Use nipple clamps while having sex with {partnerNameMale}",
      "result": "Have {partnerNameFemale} wear nipple clamps during sex"
    }
  },
  {
    "id": 53,
    "category": "Toys",
    "fantasy": {
      "male": "Have {partnerNameFemale} wear a butt plug while we have sex and enjoy the added intensity",
      "female": "Use a butt plug while having sex with {partnerNameMale}",
      "result": "Have {partnerNameFemale} wear a butt plug during sex"
    }
  },
  {
    "id": 54,
    "category": "Toys",
    "fantasy": {
      "male": "Use a butt plug while having sex with {partnerNameFemale}",
      "female": "Have {partnerNameMale} wear a butt plug while we have sex and enjoy the added intensity",
      "result": "Have {partnerNameMale} wear a butt plug during sex"
    }
  },
  {
    "id": 55,
    "category": "Toys",
    "fantasy": {
      "male": "Use sex furniture with {partnerNameFemale} to explore different positions and angles",
      "female": "Use sex furniture with {partnerNameMale} to explore different positions and angles",
      "result": "Use sex furniture with your partner"
    }
  },
  {
    "id": 56,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Blindfold {partnerNameFemale} during sex to keep her guessing and wanting more",
      "female": "Be blindfolded by {partnerNameMale} and give up control while he explores me",
      "result": "Blindfold {partnerNameFemale} during sex"
    }
  },
  {
    "id": 57,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be blindfolded by {partnerNameFemale} and give up control while she explores me",
      "female": "Blindfold {partnerNameMale} during sex to keep him guessing and wanting more",
      "result": "Blindfold {partnerNameMale} during sex"
    }
  },
  {
    "id": 58,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Tie down or otherwise restrain {partnerNameFemale} during sex",
      "female": "Be restrained by {partnerNameMale} during sex, giving up control",
      "result": "Restrain {partnerNameFemale} during sex"
    }
  },
  {
    "id": 59,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be restrained by {partnerNameFemale} during sex, giving up control",
      "female": "Tie down or otherwise restrain {partnerNameMale} during sex",
      "result": "Restrain {partnerNameMale} during sex"
    }
  },
  {
    "id": 60,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Gently choke {partnerNameFemale} during sex, reading her reactions and keeping control",
      "female": "Be gently choked by {partnerNameMale} during sex, feeling the mix of trust and control",
      "result": "Gently choke {partnerNameFemale} during sex"
    }
  },
  {
    "id": 61,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be gently choked by {partnerNameFemale} during sex, feeling the mix of trust and control",
      "female": "Gently choke {partnerNameMale} during sex, reading his reactions and keeping control",
      "result": "Gently choke {partnerNameMale} during sex"
    }
  },
  {
    "id": 62,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Hold {partnerNameFemale}'s wrists during sex to keep her under control",
      "female": "Have {partnerNameMale} hold my wrists during sex so I can't move",
      "result": "Hold {partnerNameFemale}'s wrists during sex"
    }
  },
  {
    "id": 63,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerNameFemale} hold my wrists during sex so I can't move",
      "female": "Hold {partnerNameMale}'s wrists during sex to keep him under control",
      "result": "Hold {partnerNameMale}'s wrists during sex"
    }
  },
  {
    "id": 64,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Pull {partnerNameFemale}'s hair during sex",
      "female": "Have my hair pulled by {partnerNameMale} during sex",
      "result": "Pull {partnerNameFemale}'s hair during sex"
    }
  },
  {
    "id": 65,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have my hair pulled by {partnerNameFemale} during sex",
      "female": "Pull {partnerNameMale}'s hair during sex",
      "result": "Pull {partnerNameMale}'s hair during sex"
    }
  },
  {
    "id": 66,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Spank {partnerNameFemale} with my hand during sex or foreplay",
      "female": "Be spanked by {partnerNameMale} with his hand during sex or foreplay",
      "result": "Spank {partnerNameFemale} with your hand"
    }
  },
  {
    "id": 67,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be spanked by {partnerNameFemale} with her hand during sex or foreplay",
      "female": "Spank {partnerNameMale} with my hand during sex or foreplay",
      "result": "Spank {partnerNameMale} with your hand"
    }
  },
  {
    "id": 68,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Spank {partnerNameFemale} with toys like a paddle or crop during sex or foreplay",
      "female": "Be spanked by {partnerNameMale} with toys like a paddle or crop during sex or foreplay",
      "result": "Spank {partnerNameFemale} with toys"
    }
  },
  {
    "id": 69,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be spanked by {partnerNameFemale} with toys like a paddle or crop during sex or foreplay",
      "female": "Spank {partnerNameMale} with toys like a paddle or crop during sex or foreplay",
      "result": "Spank {partnerNameMale} with toys"
    }
  },
  {
    "id": 70,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Bite {partnerNameFemale} gently or roughly during sex",
      "female": "Be bitten by {partnerNameMale} during sex",
      "result": "Bite {partnerNameFemale} during sex"
    }
  },
  {
    "id": 71,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be bitten by {partnerNameFemale} during sex",
      "female": "Bite {partnerNameMale} gently or roughly during sex",
      "result": "Bite {partnerNameMale} during sex"
    }
  },
  {
    "id": 72,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be dominant for {partnerNameFemale} and take full control during sex",
      "female": "Be submissive for {partnerNameMale} and let him take full control during sex",
      "result": "Be dominant for {partnerNameFemale} during sex"
    }
  },
  {
    "id": 73,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be submissive for {partnerNameFemale} and let her take full control during sex",
      "female": "Be dominant for {partnerNameMale} and take full control during sex",
      "result": "Be dominant for {partnerNameMale} during sex"
    }
  },
  {
    "id": 74,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Slap {partnerNameFemale}'s face during sex to assert control and intensity",
      "female": "Be slapped in the face by {partnerNameMale} during sex and give up control",
      "result": "Slap {partnerNameFemale}'s face during sex"
    }
  },
  {
    "id": 75,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be slapped in the face by {partnerNameFemale} during sex and give up control",
      "female": "Slap {partnerNameMale}'s face during sex tto assert control and intensity",
      "result": "Slap {partnerNameMale}'s face during sex"
    }
  },
  {
    "id": 76,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerNameFemale} wear a collar for me as a sign of submission and control",
      "female": "Wear a collar for {partnerNameFMale} and let him take control of me",
      "result": "Have {partnerNameFemale} wear a collar during sex as a sign of submission and control"
    }
  },
  {
    "id": 77,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wear a collar for {partnerNameFemale} and let her take control of me",
      "female": "Have {partnerNameMale} wear a collar for me as a sign of submission and control",
      "result": "Have {partnerNameMale} wear a collar during sex as a sign of submission and control"
    }
  },
  {
    "id": 78,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Use a riding crop on {partnerNameFemale} during sex or foreplay to tease, punish, or control her",
      "female": "Have {partnerNameMale} use a riding crop on me during sex or foreplay",
      "result": "Use a riding crop on {partnerNameFemale} during sex or foreplay"
    }
  },
  {
    "id": 79,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerNameFemale} use a riding crop on me during sex or foreplay",
      "female": "Use a riding crop on {partnerNameMale} during sex or foreplay to tease, punish, or control him",
      "result": "Use a riding crop on {partnerNameMale} during sex or foreplay"
    }
  },
  {
    "id": 80,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerNameFemale} wear a ball gag during sex to keep her quiet and under control",
      "female": "Wear a ball gag for {partnerNameMale} and submit in silence",
      "result": "Have {partnerNameFemale} wear a ball gag during sex"
    }
  },
  {
    "id": 81,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wear a ball gag for {partnerNameFemale} and submit in silence",
      "female": "Have {partnerNameMale} wear a ball gag during sex to keep him quiet and under control",
      "result": "Have {partnerNameMale} wear a ball gag during sex"
    }
  },
  {
    "id": 82,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerNameFemale} wear a chastity belt and control when she is allowed to be touched",
      "female": "Wear a chastity belt for {partnerNameFemale} and let him control my access and released",
      "result": "Have {partnerNameFemale} wear a chastity belt"
    }
  },
  {
    "id": 83,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wear a chastity belt for {partnerNameFemale} and let her control my access and released",
      "female": "Have {partnerNameMale} wear a chastity belt and control when he is allowed to be touched",
      "result": "Have {partnerNameMale} wear a chastity belt"
    }
  },
  {
    "id": 84,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerNameFemale} act as my submissive servant, obeying my every command",
      "female": "Be a submissive servant towards {partnerNameMale}, following his every command",
      "result": "Have {partnerNameFemale} act as submissive servant, following his every command"
    }
  },
  {
    "id": 85,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be a submissive servant towards {partnerNameFemale}, following her every command",
      "female": "Have {partnerNameMale} act as my submissive servant, obeying my every command",
      "result": "Have {partnerNameMale} act as submissive servant, following her every command"
    }
  },
  {
    "id": 86,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Edge and control {partnerNameFemale}'s orgasms commanding when she is allowed to come",
      "female": "Be edged and commanded by {partnerNameMale}, denied release until he decides I have earned it",
      "result": "Edge {partnerNameFemale} and control when she is allowed to come"
    }
  },
  {
    "id": 87,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be edged and commanded by {partnerNameFemale}, denied release until she decides I have earned it",
      "female": "Edge and control {partnerNameMale}'s orgasms commanding when he is allowed to come",
      "result": "Edge {partnerNameMale} and control when he is allowed to come"
    }
  },
  {
    "id": 88,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerNameFemale} wear fetish gear for me like leather, latex, or a harness",
      "female": "Wear fetish gear for {partnerNameMale}, like leather, latex, or a harness",
      "result": "Have {partnerNameFemale} wear fetish gear for {partnerNameMale}"
    }
  },
  {
    "id": 89,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wear fetish gear for {partnerNameFemale}, like leather, latex, or a harness",
      "female": "Have {partnerNameMale} wear fetish gear for me like leather, latex, or a harness",
      "result": "Have {partnerNameMale} wear fetish gear for {partnerNameFemale}"
    }
  },
  {
    "id": 90,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerNameFemale} wear a hood or half hood",
      "female": "Wear a hood or half hood for {partnerNameMale}",
      "result": "Have {partnerNameFemale} wear a hood or half hood"
    }
  },
  {
    "id": 91,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wear a hood or half hood for {partnerNameFemale}",
      "female": "Have {partnerNameMale} wear a hood or half hood",
      "result": "Have {partnerNameMale} wear a hood or half hood"
    }
  },
  {
    "id": 92,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerNameFemale} wear stockings and high heels during sex",
      "female": "Wear stockings and high heels during sex for {partnerNameMale}",
      "result": "Have {partnerNameFemale} wear stockings and high heels during sex"
    }
  },
  {
    "id": 93,
    "category": "Toys",
    "fantasy": {
      "male": "Have sex with {partnerNameFemale} while she is in a sex swing or lightly suspended",
      "female": "Be in a sex swing or lightly suspended during sex with {partnerNameMale}",
      "result": "Have sex with {partnerNameFemale} while she is in a sex swing or lightly suspended"
    }
  },
  {
    "id": 94,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wrap {partnerNameFemale} in bondage tape, restraining her arms or legs while teasing her body",
      "female": "Be restrained with bondage tape by {partnerNameMale}, unable to move while he has his way with me",
      "result": "Restrain {partnerNameFemale} with bondage tape"
    }
  },
  {
    "id": 95,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be restrained with bondage tape by {partnerNameFemale}, unable to move while she has her way with me",
      "female": "Wrap {partnerNameMale} in bondage tape, restraining his arms or legs while teasing his body",
      "result": "Restrain {partnerNameMale} with bondage tape"
    }
  },
  {
    "id": 96,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Tie {partnerNameFemale} with Shibari rope, wrapping her in beautiful knots and guiding her surrender",
      "female": "Be tied with Shibari rope by {partnerNameMale}, wrapped in beautiful knots and guided into surrender",
      "result": "Tie {partnerNameFemale} with Shibari rope"
    }
  },
  {
    "id": 97,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be tied with Shibari rope by {partnerNameFemale}, wrapped in beautiful knots and guided into surrender",
      "female": "Tie {partnerNameMale} with Shibari rope, wrapping him in beautiful knots and guiding his surrender",
      "result": "Tie {partnerNameMale} with Shibari rope"
    }
  },
  {
    "id": 98,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be rougher during sex with {partnerNameFemale}, pinning, grabbing, and physically dominating her",
      "female": "Be taken roughly by {partnerNameMale} during sex, pinned, grabbed, and physically dominated",
      "result": "Be rougher during sex with {partnerNameFemale}"
    }
  },
  {
    "id": 99,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be taken roughly by {partnerNameFemale} during sex, pinned, grabbed, and physically dominated",
      "female": "Be rougher during sex with {partnerNameMale}, pinning, grabbing, and physically dominating him",
      "result": "Be rougher during sex with {partnerNameMale}"
    }
  },
  {
    "id": 100,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be used like a toy by {partnerNameFemale}, letting her take what she wants without asking",
      "female": "Be used like a toy by {partnerNameMale}, letting him take what he wants without asking",
      "result": "Be used like a toy during sex"
    }
  },
  {
    "id": 101,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be called degrading names by {partnerNameFemale} during sex \u2014 like slut, toy, or good boy",
      "female": "Be called degrading names by {partnerNameMale} during sex \u2014 like slut, toy, or good girl",
      "result": "Be called degrading names during sex"
    }
  },
  {
    "id": 102,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Explore a longer B.D.S.M dynamic with {partnerNameFemale} with rules, rituals, and obedience tasks beyond the bedroom",
      "female": "Explore a longer B.D.S.M dynamic with {partnerNameMale} with rules, rituals, and obedience tasks beyond the bedroom",
      "result": "Explore a longer B.D.S.M dynamic with rules, rituals, and obedience tasks beyond the bedroom"
    }
  },
  {
    "id": 103,
    "category": "Anal",
    "fantasy": {
      "male": "Anally finger {partnerNameFemale}, watching her reactions",
      "female": "Be anally fingered by {partnerNameMale}, enjoying the unexpected sensations",
      "result": "Anally finger {partnerNameFemale}"
    }
  },
  {
    "id": 104,
    "category": "Anal",
    "fantasy": {
      "male": "Be anally fingered by {partnerNameFemale}, enjoying the unexpected sensations",
      "female": "Anally finger {partnerNameMale}, watching his reactions",
      "result": "Anally finger {partnerNameMale}"
    }
  },
  {
    "id": 105,
    "category": "Anal",
    "fantasy": {
      "male": "Anally penetrate {partnerNameFemale}, slowly and with care while watching her respond",
      "female": "Be anally penetrated by {partnerNameMale}, feeling him take me from behind",
      "result": "Anally penetrate {partnerNameFemale}"
    }
  },
  {
    "id": 106,
    "category": "Anal",
    "fantasy": {
      "male": "Be pegged by {partnerNameFemale}, surrendering to her as she takes control with a strap-on",
      "female": "Peg {partnerNameMale} with a strap-on, enjoying the power and his response",
      "result": "Peg {partnerNameMale} with a strap-on"
    }
  },
  {
    "id": 107,
    "category": "Anal",
    "fantasy": {
      "male": "Double penetrate {partnerNameFemale} using a toy and my cock at the same time",
      "female": "Be double penetrated by {partnerNameMale} with a toy and his cock at the same time",
      "result": "Double penetrate {partnerNameFemale} with a toy and {partnerNameMale}'s cock"
    }
  },
  {
    "id": 108,
    "category": "Anal",
    "fantasy": {
      "male": "Lick {partnerNameFemale}'s anus and explore her with my tongue",
      "female": "Have my anus licked by {partnerNameMale}, letting him explore me with his tongue",
      "result": "Lick {partnerNameFemale}'s anus"
    }
  },
  {
    "id": 109,
    "category": "Anal",
    "fantasy": {
      "male": "Have my anus licked by {partnerNameFemale}, letting her explore me with her tongue",
      "female": "Lick {partnerNameMale}'s anus and explore him with my tongue",
      "result": "Lick {partnerNameMale}'s anus"
    }
  },
  {
    "id": 110,
    "category": "Public",
    "fantasy": {
      "male": "Fondle {partnerNameFemale} in a public setting, teasing her when no one is watching",
      "female": "Fondle {partnerNameMale} in a public setting, teasing him when no one is watching",
      "result": "Fondle your partner in a public setting"
    }
  },
  {
    "id": 111,
    "category": "Public",
    "fantasy": {
      "male": "Have sex with {partnerNameFemale} in a car, enjoying the thrill",
      "female": "Have sex with {partnerNameMale} in a car, enjoying the thrill",
      "result": "Have sex with your partner in a car"
    }
  },
  {
    "id": 112,
    "category": "Public",
    "fantasy": {
      "male": "Have sex with {partnerNameFemale} in the woods or in a park, being exposed in nature",
      "female": "Have sex with {partnerNameMale} in the woods or in a park, being exposed in nature",
      "result": "Have sex with your partner in the woods or in a park"
    }
  },
  {
    "id": 113,
    "category": "Public",
    "fantasy": {
      "male": "Have sex with {partnerNameFemale} in front of an outward-facing window, turned on by the chance of being watched",
      "female": "Have sex with {partnerNameMale} in front of an outward-facing window, turned on by the chance of being watched",
      "result": "Have sex with your partner in front of an outward-facing window, turned on by the chance of being watched"
    }
  },
  {
    "id": 114,
    "category": "Public",
    "fantasy": {
      "male": "Have sex with {partnerNameFemale} somewhere we might get caught feeling the tension and excitement",
      "female": "Have sex with {partnerNameMale} somewhere we might get caught feeling the tension and excitement",
      "result": "Have sex with your partner in a place where you might get caught"
    }
  },
  {
    "id": 115,
    "category": "Public",
    "fantasy": {
      "male": "Have sex with {partnerNameFemale} in a work environment sneaking away for a secret encounter",
      "female": "Have sex with {partnerNameMale} in a work environment sneaking away for a secret encounter",
      "result": "Have sex with your partner in a work environment"
    }
  },
  {
    "id": 116,
    "category": "Group",
    "fantasy": {
      "male": "Go to a strip club with {partnerNameFemale}",
      "female": "Go to a strip club with {partnerNameMale}",
      "result": "Go to a strip club with your partner"
    }
  },
  {
    "id": 117,
    "category": "Group",
    "fantasy": {
      "male": "Watch other couples have sex with {partnerNameFemale}, turned on by the atmosphere and watching together",
      "female": "Watch other couples have sex with {partnerNameMale}, turned on by the atmosphere and watching together",
      "result": "Watch other couples have sex together"
    }
  },
  {
    "id": 118,
    "category": "Group",
    "fantasy": {
      "male": "Go to a play/sex party with {partnerNameFemale}, curious to see others and maybe be seen ourselves",
      "female": "Go to a play/sex party with {partnerNameMale}, curious to see others and maybe be seen ourselves",
      "result": "Attend a play/sex party together"
    }
  },
  {
    "id": 119,
    "category": "Group",
    "fantasy": {
      "male": "Let another person, people, or couples watch us have sex with {partnerNameFemale}",
      "female": "Let another person, people, or couples watch us have sex with {partnerNameMale}",
      "result": "Let others watch us partner have sex"
    }
  },
  {
    "id": 120,
    "category": "Group",
    "fantasy": {
      "male": "Include another female in sex with {partnerNameFemale}",
      "female": "Include another female in sex with {partnerNameMale}",
      "result": "Have a threesome with another woman"
    }
  },
  {
    "id": 121,
    "category": "Group",
    "fantasy": {
      "male": "Include another male in sex with {partnerNameFemale}",
      "female": "Include another male in sex with {partnerNameMale}",
      "result": "Have a threesome with another man"
    }
  },
  {
    "id": 122,
    "category": "Group",
    "fantasy": {
      "male": "Watch {partnerNameFemale} have sex with another man",
      "female": "Have sex with another man while {partnerNameMale} watches me",
      "result": "Have {partnerNameFemale} have sex with another man while {partnerNameMale} watches"
    }
  },
  {
    "id": 123,
    "category": "Group",
    "fantasy": {
      "male": "Have sex with another woman while {partnerNameFemale} watches me",
      "female": "Watch {partnerNameMale} have sex with another woman",
      "result": "Have {partnerNameMale} have sex with another woman while {partnerNameFemale} watches"
    }
  },
  {
    "id": 124,
    "category": "Group",
    "fantasy": {
      "male": "Have sex monogamously with {partnerNameFemale} in the presence of other couples doing the same",
      "female": "Have sex monogamously with {partnerNameMale} in the presence of other couples doing the same",
      "result": "Have sex with your partner in the presence of other couples do the same nearby"
    }
  },
  {
    "id": 125,
    "category": "Group",
    "fantasy": {
      "male": "Include another couple in sex with {partnerNameFemale}, exploring each other together",
      "female": "Include another couple in sex with {partnerNameMale}, sharing and switching partners",
      "result": "Include another couple in sex with your partner, sharing and switching partners"
    }
  },
  {
    "id": 126,
    "category": "Group",
    "fantasy": {
      "male": "Go to a sex or swingers club with {partnerNameFemale}, curious to watch, explore, or join in",
      "female": "Go to a sex or swingers club with {partnerNameMale}, curious to watch, explore, or join in",
      "result": "Go to a sex or swingers club together, curious to watch, explore, or join in"
    }
  },
  {
    "id": 127,
    "category": "Group",
    "fantasy": {
      "male": "Go to a pleasure resort with {partnerNameFemale}, where we can relax, flirt, and explore new desires together",
      "female": "Go to a pleasure resort with {partnerNameMale}, where we can relax, flirt, and explore new desires together",
      "result": "Go to a pleasure resort together, where we can relax, flirt, and explore new desires together"
    }
  },
  {
    "id": 128,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Drip hot wax on {partnerNameFemale}'s body",
      "female": "Have {partnerNameMale} drip hot wax on my body, feeling each drop as a teasing burn",
      "result": "Drip hot wax on {partnerNameFemale}'s body"
    }
  },
  {
    "id": 129,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Have {partnerNameFemale} drip hot wax on my body, feeling each drop as a teasing burn",
      "female": "Drip hot wax on {partnerNameMale}'s body",
      "result": "Drip hot wax on {partnerNameMale}'s body"
    }
  },
  {
    "id": 130,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Be edged by {partnerNameFemale}, brought to the edge of orgasm again and again without release",
      "female": "Edge {partnerNameMale}, bringing him to the edge of orgasm again and again without release",
      "result": "Edge {partnerNameMale} without letting him come"
    }
  },
  {
    "id": 131,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Edge {partnerNameFemale}, bringing her to the edge of orgasm again and again without release",
      "female": "Be edged by {partnerNameMale}, brought to the edge of orgasm again and again without release",
      "result": "Edge {partnerNameFemale} without letting her come"
    }
  },
  {
    "id": 132,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Receive a foot job from {partnerNameFemale}",
      "female": "Give {partnerNameMale} a foot job",
      "result": "Give {partnerNameMale} a foot job"
    }
  },
  {
    "id": 133,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Douse ourselves in oil during sex with {partnerNameFemale}",
      "female": "Douse ourselves in oil during sex with {partnerNameMale}",
      "result": "Douse yourselves in oil during sex"
    }
  },
  {
    "id": 134,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Give {partnerNameFemale} a golden shower",
      "female": "Receive a golden shower from {partnerNameMale}",
      "result": "Give {partnerNameFemale} a golden shower"
    }
  },
  {
    "id": 135,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Receive a golden shower from {partnerNameFemale}",
      "female": "Give {partnerNameMale} a golden shower",
      "result": "Give {partnerNameMale} a golden shower"
    }
  },
  {
    "id": 136,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Explore spiritual or tantric sex with {partnerNameFemale}, sharing a deep emotional intimacy",
      "female": "Explore spiritual or tantric sex with {partnerNameMale}, sharing a deep emotional intimacy",
      "result": "Explore spiritual or tantric sex with your partner"
    }
  },
  {
    "id": 137,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Explore pet or pony play with {partnerNameFemale}",
      "female": "Explore pet or pony play with {partnerNameMale}",
      "result": "Explore pet or pony play with your partner"
    }
  }
];

export default sampleFantasies;
