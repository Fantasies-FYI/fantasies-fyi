
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
    "name": "The Basics",
    "colors": {
      "background": "#d40774",
      "text": "#ffffff",
      "border": "#d40774"
    }
  },
  {
    "name": "Sensual & Intimate",
    "colors": {
      "background": "#ea7b3c",
      "text": "#ffffff",
      "border": "#ea7b3c"
    }
  },
  {
    "name": "Toys",
    "colors": {
      "background": "#84b669",
      "text": "#ffffff",
      "border": "#84b669"
    }
  },
  {
    "name": "B.D.S.M",
    "colors": {
      "background": "#5ab9c5",
      "text": "#ffffff",
      "border": "#5ab9c5"
    }
  },
  {
    "name": "Anal",
    "colors": {
      "background": "#4581c5",
      "text": "#ffffff",
      "border": "#4581c5"
    }
  },
  {
    "name": "Public",
    "colors": {
      "background": "#8755b7",
      "text": "#ffffff",
      "border": "#8755b7"
    }
  },
  {
    "name": "Group",
    "colors": {
      "background": "#d40774",
      "text": "#ffffff",
      "border": "#d40774"
    }
  },
  {
    "name": "Other Fetishes",
    "colors": {
      "background": "#ea7b3c",
      "text": "#ffffff",
      "border": "#ea7b3c"
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
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Enjoy longer teasing and foreplay sessions with {partnerName}",
      "female": "Enjoy longer teasing and foreplay sessions with {partnerName}",
      "result": "Enjoy longer teasing and foreplay sessions"
    }
  },
  {
    "id": 2,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Have a steamy phone sex session with {partnerName}",
      "female": "Have a steamy phone sex session with {partnerName}",
      "result": "Have a steamy phone sex session"
    }
  },
  {
    "id": 3,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Have sex with {partnerName} while keeping most of our clothes on",
      "female": "Have sex with {partnerName} while keeping most of our clothes on",
      "result": "Have sex with while keeping most of our clothes on"
    }
  },
  {
    "id": 4,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Slowly strip {partnerName} completely",
      "female": "Let {partnerName} slowly strip me completely",
      "result": "Slowly strip {partnerName} completely"
    }
  },
  {
    "id": 5,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Let {partnerName} slowly strip me completely",
      "female": "Slowly strip {partnerName} completely",
      "result": "Slowly strip {partnerName} completely"
    }
  },
  {
    "id": 6,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Have {partnerName} give me a sensual massage",
      "female": "Give {partnerName} a sensual massage",
      "result": "Give a sensual massage to {partnerName}"
    }
  },
  {
    "id": 7,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Give {partnerName} a sensual massage",
      "female": "Have {partnerName} give me a sensual massage",
      "result": "Give a sensual massage to {partnerName}"
    }
  },
  {
    "id": 8,
    "category": "The Basics",
    "fantasy": {
      "male": "Blindfold {partnerName} during sex or foreplay",
      "female": "Be blindfolded by {partnerName} during sex or foreplay",
      "result": "Blindfold {partnerName} during sex or foreplay"
    }
  },
  {
    "id": 9,
    "category": "The Basics",
    "fantasy": {
      "male": "Be blindfolded by {partnerName} during sex or foreplay",
      "female": "Blindfold {partnerName} during sex or foreplay",
      "result": "Blindfold {partnerName} during sex or foreplay"
    }
  },
  {
    "id": 10,
    "category": "The Basics",
    "fantasy": {
      "male": "Take sensual pictures of {partnerName}",
      "female": "Pose for sensual pictures taken by {partnerName}",
      "result": "Take sensual pictures of {partnerName}"
    }
  },
  {
    "id": 11,
    "category": "The Basics",
    "fantasy": {
      "male": "Pose for sensual pictures taken by {partnerName}",
      "female": "Take sensual pictures of {partnerName}",
      "result": "Take sensual pictures of {partnerName}"
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
      "male": "Have sex in reverse cowgirl position with {partnerName} on top, facing away",
      "female": "Be on top in reverse cowgirl position, facing away from {partnerName}",
      "result": "Have sex in reverse cowgirl position with {partnerName} on top, facing away"
    }
  },
  {
    "id": 14,
    "category": "The Basics",
    "fantasy": {
      "male": "Use lube, flavoured or not, with {partnerName}",
      "female": "Use lube, flavoured or not, with {partnerName}",
      "result": "Use lube, flavoured or not, together"
    }
  },
  {
    "id": 15,
    "category": "The Basics",
    "fantasy": {
      "male": "Strip or give {partnerName} a lap dance",
      "female": "Have {partnerName} strip or give me a lap dance",
      "result": "Give a striptease or lap dance to {partnerName}"
    }
  },
  {
    "id": 16,
    "category": "The Basics",
    "fantasy": {
      "male": "Have {partnerName} strip or give me a lap dance",
      "female": "Strip or give {partnerName} a lap dance",
      "result": "Give a striptease or lap dance to {partnerName}"
    }
  },
  {
    "id": 17,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Nibble {partnerName}'s earlobes",
      "female": "Have {partnerName} nibble my earlobes",
      "result": "Nibble {partnerName}'s earlobes"
    }
  },
  {
    "id": 18,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Have {partnerName} nibble my earlobes",
      "female": "Nibble {partnerName}'s earlobes",
      "result": "Nibble {partnerName}'s earlobes"
    }
  },
  {
    "id": 19,
    "category": "The Basics",
    "fantasy": {
      "male": "Have sex with {partnerName} in front of a mirror",
      "female": "Have sex with {partnerName} in front of a mirror",
      "result": "Have sex in front of a mirror"
    }
  },
  {
    "id": 20,
    "category": "The Basics",
    "fantasy": {
      "male": "Wake {partnerName} up with sex or oral sex",
      "female": "Be woken up by {partnerName} with sex or oral sex",
      "result": "Wake {partnerName} up with sex or oral sex"
    }
  },
  {
    "id": 21,
    "category": "The Basics",
    "fantasy": {
      "male": "Be woken up by {partnerName} with sex or oral sex",
      "female": "Wake {partnerName} up with sex or oral sex",
      "result": "Wake {partnerName} up with sex or oral sex"
    }
  },
  {
    "id": 22,
    "category": "The Basics",
    "fantasy": {
      "male": "Masturbate while watching {partnerName} do the same",
      "female": "Masturbate while watching {partnerName} do the same",
      "result": "Masturbate while watching each other"
    }
  },
  {
    "id": 23,
    "category": "The Basics",
    "fantasy": {
      "male": "Watch porn with {partnerName}",
      "female": "Watch porn with {partnerName}",
      "result": "Watch porn together with your partner"
    }
  },
  {
    "id": 24,
    "category": "The Basics",
    "fantasy": {
      "male": "Be shown what {partnerName} likes from porn",
      "female": "Show {partnerName} what I like from porn",
      "result": "Show {partnerName} what you like from porn"
    }
  },
  {
    "id": 25,
    "category": "The Basics",
    "fantasy": {
      "male": "Show {partnerName} what I like from porn",
      "female": "Be shown what {partnerName} likes from porn",
      "result": "Show {partnerName} what you like from porn"
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
      "male": "Talk dirtier to {partnerName}",
      "female": "Talk dirtier to {partnerName}",
      "result": "Talk dirty to each other"
    }
  },
  {
    "id": 28,
    "category": "The Basics",
    "fantasy": {
      "male": "Roleplay with {partnerName}, with or without costumes",
      "female": "Roleplay with {partnerName}, with or without costumes",
      "result": "Roleplay with together, with or without costumes"
    }
  },
  {
    "id": 29,
    "category": "The Basics",
    "fantasy": {
      "male": "Have {partnerName} wear stockings and high heels during sex",
      "female": "Wear stockings and high heels during sex for {partnerName}",
      "result": "Have {partnerName} wear stockings and high heels during sex"
    }
  },
  {
    "id": 30,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Listen to romantic music while having sex with {partnerName}",
      "female": "Listen to romantic music while having sex with {partnerName}",
      "result": "Listen to romantic music while having sex"
    }
  },
  {
    "id": 31,
    "category": "The Basics",
    "fantasy": {
      "male": "Listen to more aggressive music (like rap or rock) while having sex with {partnerName}",
      "female": "Listen to more aggressive music (like rap or rock) while having sex with {partnerName}",
      "result": "Listen to more aggressive music (like rap or rock) during sex"
    }
  },
  {
    "id": 32,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Mutually masturbate with {partnerName}",
      "female": "Mutually masturbate with {partnerName}",
      "result": "Mutually masturbate with your partner"
    }
  },
  {
    "id": 33,
    "category": "Sensual & Intimate",
    "fantasy": {
      "male": "Slide my penis between {partnerName}'s breasts and feel her warmth around me",
      "female": "Let {partnerName} slide his penis between my breasts and feel my warmth around him",
      "result": "Slide penis between {partnerName}'s breasts"
    }
  },
  {
    "id": 34,
    "category": "The Basics",
    "fantasy": {
      "male": "Do 69 with {partnerName}",
      "female": "Do 69 with {partnerName}",
      "result": "Have 69 together"
    }
  },
  {
    "id": 35,
    "category": "The Basics",
    "fantasy": {
      "male": "Have {partnerName} swallow my cum",
      "female": "Swallow {partnerName}'s cum",
      "result": "Swallow {partnerName}'s cum"
    }
  },
  {
    "id": 36,
    "category": "The Basics",
    "fantasy": {
      "male": "Watch {partnerName} play with my cum using her fingers or body",
      "female": "Play with {partnerName}'s cum using my fingers or body, teasing him as I do it",
      "result": "Play with {partnerName}'s cum using fingers or body"
    }
  },
  {
    "id": 37,
    "category": "The Basics",
    "fantasy": {
      "male": "Cum over {partnerName}'s breasts or neck and watch it drip down her skin",
      "female": "Have {partnerName} cum over my breasts or neck and feel it on my skin",
      "result": "Cum over {partnerName}'s breasts or neck"
    }
  },
  {
    "id": 38,
    "category": "The Basics",
    "fantasy": {
      "male": "Cum over {partnerName}'s face and watch it drip from her lips",
      "female": "Have {partnerName} cum over my face and feel it dripping from my lips",
      "result": "Cum over {partnerName}'s face"
    }
  },
  {
    "id": 39,
    "category": "The Basics",
    "fantasy": {
      "male": "Have {partnerName} sit on my face and let me give her oral sex",
      "female": "Sit on {partnerName}'s face and be given oral sex",
      "result": "Have {partnerName} sit on your face and receive oral sex"
    }
  },
  {
    "id": 40,
    "category": "The Basics",
    "fantasy": {
      "male": "Sit on {partnerName}'s face and be given oral sex",
      "female": "Have {partnerName} sit on my face and let me give him oral sex",
      "result": "Have {partnerName} sit on your face and receive oral sex"
    }
  },
  {
    "id": 41,
    "category": "The Basics",
    "fantasy": {
      "male": "Be rougher during sex with {partnerName}, taking more control",
      "female": "Be rougher during sex with {partnerName}, taking more control",
      "result": "Be rougher during sex with your partner"
    }
  },
  {
    "id": 42,
    "category": "The Basics",
    "fantasy": {
      "male": "Call {partnerName} obscene or degrading words during sex",
      "female": "Call {partnerName} obscene or degrading words during sex",
      "result": "Call your partner obscene or degrading words during sex"
    }
  },
  {
    "id": 43,
    "category": "The Basics",
    "fantasy": {
      "male": "Have sex with {partnerName} while she's on her period",
      "female": "Have sex while on my period with {partnerName}",
      "result": "Have sex with {partnerName} while she's on her period"
    }
  },
  {
    "id": 44,
    "category": "The Basics",
    "fantasy": {
      "male": "Fist {partnerName} slowly and carefully",
      "female": "Be fisted by {partnerName} slowly and carefully",
      "result": "Fist {partnerName} slowly and carefully"
    }
  },
  {
    "id": 45,
    "category": "Toys",
    "fantasy": {
      "male": "Watch {partnerName} use sex toys on herself while I watch and enjoy it",
      "female": "Use sex toys on myself while {partnerName} watches and enjoys it",
      "result": "Watch {partnerName} use sex toys on herself"
    }
  },
  {
    "id": 46,
    "category": "Toys",
    "fantasy": {
      "male": "Use sex toys on myself while {partnerName} watches and enjoys it",
      "female": "Watch {partnerName} use sex toys on himself while I watch and enjoy it",
      "result": "Watch {partnerName} use sex toys on himself"
    }
  },
  {
    "id": 47,
    "category": "Toys",
    "fantasy": {
      "male": "Have {partnerName} use a dildo or vibrator during sex on herself or with me",
      "female": "Use a dildo or vibrator during sex with {partnerName} on myself or with him",
      "result": "Use a dildo or vibrator during sex with {partnerName}"
    }
  },
  {
    "id": 48,
    "category": "Toys",
    "fantasy": {
      "male": "Use a spreader bar on {partnerName} during sex to hold her legs apart",
      "female": "Have {partnerName} use a spreader bar on me during sex, keeping my legs apart",
      "result": "Use a spreader bar on {partnerName} during sex"
    }
  },
  {
    "id": 49,
    "category": "Toys",
    "fantasy": {
      "male": "Have {partnerName} use a spreader bar on me during sex, keeping my legs apart",
      "female": "Use a spreader bar on {partnerName} during sex to hold his legs apart",
      "result": "Use a spreader bar on {partnerName} during sex"
    }
  },
  {
    "id": 50,
    "category": "Toys",
    "fantasy": {
      "male": "Wear a cock ring (vibrating or non-vibrating) during sex with {partnerName}",
      "female": "Have {partnerName} wear a cock ring (vibrating or non-vibrating) during sex",
      "result": "Have {partnerName} wear a cock ring during sex"
    }
  },
  {
    "id": 51,
    "category": "Toys",
    "fantasy": {
      "male": "Have {partnerName} use a penis pump on me or watch as I use one for teasing and stimulation",
      "female": "Use a penis pump on {partnerName} or watch him use it for teasing and stimulation",
      "result": "Use a penis pump on {partnerName} for teasing and stimulation"
    }
  },
  {
    "id": 52,
    "category": "Toys",
    "fantasy": {
      "male": "Have {partnerName} wear nipple clamps during sex",
      "female": "Use nipple clamps while having sex with {partnerName}",
      "result": "Have {partnerName} wear nipple clamps during sex"
    }
  },
  {
    "id": 53,
    "category": "Toys",
    "fantasy": {
      "male": "Have {partnerName} wear a butt plug while we have sex and enjoy the added intensity",
      "female": "Use a butt plug while having sex with {partnerName}",
      "result": "Have {partnerName} wear a butt plug during sex"
    }
  },
  {
    "id": 54,
    "category": "Toys",
    "fantasy": {
      "male": "Use a butt plug while having sex with {partnerName}",
      "female": "Have {partnerName} wear a butt plug while we have sex and enjoy the added intensity",
      "result": "Have {partnerName} wear a butt plug during sex"
    }
  },
  {
    "id": 55,
    "category": "Toys",
    "fantasy": {
      "male": "Use sex furniture with {partnerName} to explore different positions and angles",
      "female": "Use sex furniture with {partnerName} to explore different positions and angles",
      "result": "Use sex furniture with your partner"
    }
  },
  {
    "id": 56,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Blindfold {partnerName} during sex to keep her guessing and wanting more",
      "female": "Be blindfolded by {partnerName} and give up control while he explores me",
      "result": "Blindfold {partnerName} during sex"
    }
  },
  {
    "id": 57,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be blindfolded by {partnerName} and give up control while she explores me",
      "female": "Blindfold {partnerName} during sex to keep him guessing and wanting more",
      "result": "Blindfold {partnerName} during sex"
    }
  },
  {
    "id": 58,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Tie down or otherwise restrain {partnerName} during sex",
      "female": "Be restrained by {partnerName} during sex, giving up control",
      "result": "Restrain {partnerName} during sex"
    }
  },
  {
    "id": 59,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be restrained by {partnerName} during sex, giving up control",
      "female": "Tie down or otherwise restrain {partnerName} during sex",
      "result": "Restrain {partnerName} during sex"
    }
  },
  {
    "id": 60,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Gently choke {partnerName} during sex, reading her reactions and keeping control",
      "female": "Be gently choked by {partnerName} during sex, feeling the mix of trust and control",
      "result": "Gently choke {partnerName} during sex"
    }
  },
  {
    "id": 61,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be gently choked by {partnerName} during sex, feeling the mix of trust and control",
      "female": "Gently choke {partnerName} during sex, reading his reactions and keeping control",
      "result": "Gently choke {partnerName} during sex"
    }
  },
  {
    "id": 62,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Hold {partnerName}'s wrists during sex to keep her under control",
      "female": "Have {partnerName} hold my wrists during sex so I can't move",
      "result": "Hold {partnerName}'s wrists during sex"
    }
  },
  {
    "id": 63,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerName} hold my wrists during sex so I can't move",
      "female": "Hold {partnerName}'s wrists during sex to keep him under control",
      "result": "Hold {partnerName}'s wrists during sex"
    }
  },
  {
    "id": 64,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Pull {partnerName}'s hair during sex",
      "female": "Have my hair pulled by {partnerName} during sex",
      "result": "Pull {partnerName}'s hair during sex"
    }
  },
  {
    "id": 65,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have my hair pulled by {partnerName} during sex",
      "female": "Pull {partnerName}'s hair during sex",
      "result": "Pull {partnerName}'s hair during sex"
    }
  },
  {
    "id": 66,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Spank {partnerName} with my hand during sex or foreplay",
      "female": "Be spanked by {partnerName} with his hand during sex or foreplay",
      "result": "Spank {partnerName} with your hand"
    }
  },
  {
    "id": 67,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be spanked by {partnerName} with her hand during sex or foreplay",
      "female": "Spank {partnerName} with my hand during sex or foreplay",
      "result": "Spank {partnerName} with your hand"
    }
  },
  {
    "id": 68,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Spank {partnerName} with toys like a paddle or crop during sex or foreplay",
      "female": "Be spanked by {partnerName} with toys like a paddle or crop during sex or foreplay",
      "result": "Spank {partnerName} with toys"
    }
  },
  {
    "id": 69,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be spanked by {partnerName} with toys like a paddle or crop during sex or foreplay",
      "female": "Spank {partnerName} with toys like a paddle or crop during sex or foreplay",
      "result": "Spank {partnerName} with toys"
    }
  },
  {
    "id": 70,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Bite {partnerName} gently or roughly during sex",
      "female": "Be bitten by {partnerName} during sex",
      "result": "Bite {partnerName} during sex"
    }
  },
  {
    "id": 71,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be bitten by {partnerName} during sex",
      "female": "Bite {partnerName} gently or roughly during sex",
      "result": "Bite {partnerName} during sex"
    }
  },
  {
    "id": 72,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be dominant for {partnerName} and take full control during sex",
      "female": "Be submissive for {partnerName} and let him take full control during sex",
      "result": "Be dominant for {partnerName} during sex"
    }
  },
  {
    "id": 73,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be submissive for {partnerName} and let her take full control during sex",
      "female": "Be dominant for {partnerName} and take full control during sex",
      "result": "Be dominant for {partnerName} during sex"
    }
  },
  {
    "id": 74,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Slap {partnerName}'s face during sex to assert control and intensity",
      "female": "Be slapped in the face by {partnerName} during sex and give up control",
      "result": "Slap {partnerName}'s face during sex"
    }
  },
  {
    "id": 75,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be slapped in the face by {partnerName} during sex and give up control",
      "female": "Slap {partnerName}'s face during sex tto assert control and intensity",
      "result": "Slap {partnerName}'s face during sex"
    }
  },
  {
    "id": 76,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerName} wear a collar for me as a sign of submission and control",
      "female": "Wear a collar for {partnerNameFMale} and let him take control of me",
      "result": "Have {partnerName} wear a collar during sex as a sign of submission and control"
    }
  },
  {
    "id": 77,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wear a collar for {partnerName} and let her take control of me",
      "female": "Have {partnerName} wear a collar for me as a sign of submission and control",
      "result": "Have {partnerName} wear a collar during sex as a sign of submission and control"
    }
  },
  {
    "id": 78,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Use a riding crop on {partnerName} during sex or foreplay to tease, punish, or control her",
      "female": "Have {partnerName} use a riding crop on me during sex or foreplay",
      "result": "Use a riding crop on {partnerName} during sex or foreplay"
    }
  },
  {
    "id": 79,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerName} use a riding crop on me during sex or foreplay",
      "female": "Use a riding crop on {partnerName} during sex or foreplay to tease, punish, or control him",
      "result": "Use a riding crop on {partnerName} during sex or foreplay"
    }
  },
  {
    "id": 80,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerName} wear a ball gag during sex to keep her quiet and under control",
      "female": "Wear a ball gag for {partnerName} and submit in silence",
      "result": "Have {partnerName} wear a ball gag during sex"
    }
  },
  {
    "id": 81,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wear a ball gag for {partnerName} and submit in silence",
      "female": "Have {partnerName} wear a ball gag during sex to keep him quiet and under control",
      "result": "Have {partnerName} wear a ball gag during sex"
    }
  },
  {
    "id": 82,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerName} wear a chastity belt and control when she is allowed to be touched",
      "female": "Wear a chastity belt for {partnerName} and let him control my access and released",
      "result": "Have {partnerName} wear a chastity belt"
    }
  },
  {
    "id": 83,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wear a chastity belt for {partnerName} and let her control my access and released",
      "female": "Have {partnerName} wear a chastity belt and control when he is allowed to be touched",
      "result": "Have {partnerName} wear a chastity belt"
    }
  },
  {
    "id": 84,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerName} act as my submissive servant, obeying my every command",
      "female": "Be a submissive servant towards {partnerName}, following his every command",
      "result": "Have {partnerName} act as submissive servant, following his every command"
    }
  },
  {
    "id": 85,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be a submissive servant towards {partnerName}, following her every command",
      "female": "Have {partnerName} act as my submissive servant, obeying my every command",
      "result": "Have {partnerName} act as submissive servant, following her every command"
    }
  },
  {
    "id": 86,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Edge and control {partnerName}'s orgasms commanding when she is allowed to come",
      "female": "Be edged and commanded by {partnerName}, denied release until he decides I have earned it",
      "result": "Edge {partnerName} and control when she is allowed to come"
    }
  },
  {
    "id": 87,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be edged and commanded by {partnerName}, denied release until she decides I have earned it",
      "female": "Edge and control {partnerName}'s orgasms commanding when he is allowed to come",
      "result": "Edge {partnerName} and control when he is allowed to come"
    }
  },
  {
    "id": 88,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerName} wear fetish gear for me like leather, latex, or a harness",
      "female": "Wear fetish gear for {partnerName}, like leather, latex, or a harness",
      "result": "Have {partnerName} wear fetish gear for {partnerName}"
    }
  },
  {
    "id": 89,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wear fetish gear for {partnerName}, like leather, latex, or a harness",
      "female": "Have {partnerName} wear fetish gear for me like leather, latex, or a harness",
      "result": "Have {partnerName} wear fetish gear for {partnerName}"
    }
  },
  {
    "id": 90,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerName} wear a hood or half hood",
      "female": "Wear a hood or half hood for {partnerName}",
      "result": "Have {partnerName} wear a hood or half hood"
    }
  },
  {
    "id": 91,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wear a hood or half hood for {partnerName}",
      "female": "Have {partnerName} wear a hood or half hood",
      "result": "Have {partnerName} wear a hood or half hood"
    }
  },
  {
    "id": 92,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Have {partnerName} wear stockings and high heels during sex",
      "female": "Wear stockings and high heels during sex for {partnerName}",
      "result": "Have {partnerName} wear stockings and high heels during sex"
    }
  },
  {
    "id": 93,
    "category": "Toys",
    "fantasy": {
      "male": "Have sex with {partnerName} while she is in a sex swing or lightly suspended",
      "female": "Be in a sex swing or lightly suspended during sex with {partnerName}",
      "result": "Have sex with {partnerName} while she is in a sex swing or lightly suspended"
    }
  },
  {
    "id": 94,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Wrap {partnerName} in bondage tape, restraining her arms or legs while teasing her body",
      "female": "Be restrained with bondage tape by {partnerName}, unable to move while he has his way with me",
      "result": "Restrain {partnerName} with bondage tape"
    }
  },
  {
    "id": 95,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be restrained with bondage tape by {partnerName}, unable to move while she has her way with me",
      "female": "Wrap {partnerName} in bondage tape, restraining his arms or legs while teasing his body",
      "result": "Restrain {partnerName} with bondage tape"
    }
  },
  {
    "id": 96,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Tie {partnerName} with Shibari rope, wrapping her in beautiful knots and guiding her surrender",
      "female": "Be tied with Shibari rope by {partnerName}, wrapped in beautiful knots and guided into surrender",
      "result": "Tie {partnerName} with Shibari rope"
    }
  },
  {
    "id": 97,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be tied with Shibari rope by {partnerName}, wrapped in beautiful knots and guided into surrender",
      "female": "Tie {partnerName} with Shibari rope, wrapping him in beautiful knots and guiding his surrender",
      "result": "Tie {partnerName} with Shibari rope"
    }
  },
  {
    "id": 98,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be rougher during sex with {partnerName}, pinning, grabbing, and physically dominating her",
      "female": "Be taken roughly by {partnerName} during sex, pinned, grabbed, and physically dominated",
      "result": "Be rougher during sex with {partnerName}"
    }
  },
  {
    "id": 99,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be taken roughly by {partnerName} during sex, pinned, grabbed, and physically dominated",
      "female": "Be rougher during sex with {partnerName}, pinning, grabbing, and physically dominating him",
      "result": "Be rougher during sex with {partnerName}"
    }
  },
  {
    "id": 100,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be used like a toy by {partnerName}, letting her take what she wants without asking",
      "female": "Be used like a toy by {partnerName}, letting him take what he wants without asking",
      "result": "Be used like a toy during sex"
    }
  },
  {
    "id": 101,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Be called degrading names by {partnerName} during sex \u2014 like slut, toy, or good boy",
      "female": "Be called degrading names by {partnerName} during sex \u2014 like slut, toy, or good girl",
      "result": "Be called degrading names during sex"
    }
  },
  {
    "id": 102,
    "category": "B.D.S.M",
    "fantasy": {
      "male": "Explore a longer B.D.S.M dynamic with {partnerName} with rules, rituals, and obedience tasks beyond the bedroom",
      "female": "Explore a longer B.D.S.M dynamic with {partnerName} with rules, rituals, and obedience tasks beyond the bedroom",
      "result": "Explore a longer B.D.S.M dynamic with rules, rituals, and obedience tasks beyond the bedroom"
    }
  },
  {
    "id": 103,
    "category": "Anal",
    "fantasy": {
      "male": "Anally finger {partnerName}, watching her reactions",
      "female": "Be anally fingered by {partnerName}, enjoying the unexpected sensations",
      "result": "Anally finger {partnerName}"
    }
  },
  {
    "id": 104,
    "category": "Anal",
    "fantasy": {
      "male": "Be anally fingered by {partnerName}, enjoying the unexpected sensations",
      "female": "Anally finger {partnerName}, watching his reactions",
      "result": "Anally finger {partnerName}"
    }
  },
  {
    "id": 105,
    "category": "Anal",
    "fantasy": {
      "male": "Anally penetrate {partnerName}, slowly and with care while watching her respond",
      "female": "Be anally penetrated by {partnerName}, feeling him take me from behind",
      "result": "Anally penetrate {partnerName}"
    }
  },
  {
    "id": 106,
    "category": "Anal",
    "fantasy": {
      "male": "Be pegged by {partnerName}, surrendering to her as she takes control with a strap-on",
      "female": "Peg {partnerName} with a strap-on, enjoying the power and his response",
      "result": "Peg {partnerName} with a strap-on"
    }
  },
  {
    "id": 107,
    "category": "Anal",
    "fantasy": {
      "male": "Double penetrate {partnerName} using a toy and my cock at the same time",
      "female": "Be double penetrated by {partnerName} with a toy and his cock at the same time",
      "result": "Double penetrate {partnerName} with a toy and {partnerName}'s cock"
    }
  },
  {
    "id": 108,
    "category": "Anal",
    "fantasy": {
      "male": "Lick {partnerName}'s anus and explore her with my tongue",
      "female": "Have my anus licked by {partnerName}, letting him explore me with his tongue",
      "result": "Lick {partnerName}'s anus"
    }
  },
  {
    "id": 109,
    "category": "Anal",
    "fantasy": {
      "male": "Have my anus licked by {partnerName}, letting her explore me with her tongue",
      "female": "Lick {partnerName}'s anus and explore him with my tongue",
      "result": "Lick {partnerName}'s anus"
    }
  },
  {
    "id": 110,
    "category": "Public",
    "fantasy": {
      "male": "Fondle {partnerName} in a public setting, teasing her when no one is watching",
      "female": "Fondle {partnerName} in a public setting, teasing him when no one is watching",
      "result": "Fondle your partner in a public setting"
    }
  },
  {
    "id": 111,
    "category": "Public",
    "fantasy": {
      "male": "Have sex with {partnerName} in a car, enjoying the thrill",
      "female": "Have sex with {partnerName} in a car, enjoying the thrill",
      "result": "Have sex with your partner in a car"
    }
  },
  {
    "id": 112,
    "category": "Public",
    "fantasy": {
      "male": "Have sex with {partnerName} in the woods or in a park, being exposed in nature",
      "female": "Have sex with {partnerName} in the woods or in a park, being exposed in nature",
      "result": "Have sex with your partner in the woods or in a park"
    }
  },
  {
    "id": 113,
    "category": "Public",
    "fantasy": {
      "male": "Have sex with {partnerName} in front of an outward-facing window, turned on by the chance of being watched",
      "female": "Have sex with {partnerName} in front of an outward-facing window, turned on by the chance of being watched",
      "result": "Have sex with your partner in front of an outward-facing window, turned on by the chance of being watched"
    }
  },
  {
    "id": 114,
    "category": "Public",
    "fantasy": {
      "male": "Have sex with {partnerName} somewhere we might get caught feeling the tension and excitement",
      "female": "Have sex with {partnerName} somewhere we might get caught feeling the tension and excitement",
      "result": "Have sex with your partner in a place where you might get caught"
    }
  },
  {
    "id": 115,
    "category": "Public",
    "fantasy": {
      "male": "Have sex with {partnerName} in a work environment sneaking away for a secret encounter",
      "female": "Have sex with {partnerName} in a work environment sneaking away for a secret encounter",
      "result": "Have sex with your partner in a work environment"
    }
  },
  {
    "id": 116,
    "category": "Group",
    "fantasy": {
      "male": "Go to a strip club with {partnerName}",
      "female": "Go to a strip club with {partnerName}",
      "result": "Go to a strip club with your partner"
    }
  },
  {
    "id": 117,
    "category": "Group",
    "fantasy": {
      "male": "Watch other couples have sex with {partnerName}, turned on by the atmosphere and watching together",
      "female": "Watch other couples have sex with {partnerName}, turned on by the atmosphere and watching together",
      "result": "Watch other couples have sex together"
    }
  },
  {
    "id": 118,
    "category": "Group",
    "fantasy": {
      "male": "Go to a play/sex party with {partnerName}, curious to see others and maybe be seen ourselves",
      "female": "Go to a play/sex party with {partnerName}, curious to see others and maybe be seen ourselves",
      "result": "Attend a play/sex party together"
    }
  },
  {
    "id": 119,
    "category": "Group",
    "fantasy": {
      "male": "Let another person, people, or couples watch us have sex with {partnerName}",
      "female": "Let another person, people, or couples watch us have sex with {partnerName}",
      "result": "Let others watch us partner have sex"
    }
  },
  {
    "id": 120,
    "category": "Group",
    "fantasy": {
      "male": "Include another female in sex with {partnerName}",
      "female": "Include another female in sex with {partnerName}",
      "result": "Have a threesome with another woman"
    }
  },
  {
    "id": 121,
    "category": "Group",
    "fantasy": {
      "male": "Include another male in sex with {partnerName}",
      "female": "Include another male in sex with {partnerName}",
      "result": "Have a threesome with another man"
    }
  },
  {
    "id": 122,
    "category": "Group",
    "fantasy": {
      "male": "Watch {partnerName} have sex with another man",
      "female": "Have sex with another man while {partnerName} watches me",
      "result": "Have {partnerName} have sex with another man while {partnerName} watches"
    }
  },
  {
    "id": 123,
    "category": "Group",
    "fantasy": {
      "male": "Have sex with another woman while {partnerName} watches me",
      "female": "Watch {partnerName} have sex with another woman",
      "result": "Have {partnerName} have sex with another woman while {partnerName} watches"
    }
  },
  {
    "id": 124,
    "category": "Group",
    "fantasy": {
      "male": "Have sex monogamously with {partnerName} in the presence of other couples doing the same",
      "female": "Have sex monogamously with {partnerName} in the presence of other couples doing the same",
      "result": "Have sex with your partner in the presence of other couples do the same nearby"
    }
  },
  {
    "id": 125,
    "category": "Group",
    "fantasy": {
      "male": "Include another couple in sex with {partnerName}, exploring each other together",
      "female": "Include another couple in sex with {partnerName}, sharing and switching partners",
      "result": "Include another couple in sex with your partner, sharing and switching partners"
    }
  },
  {
    "id": 126,
    "category": "Group",
    "fantasy": {
      "male": "Go to a sex or swingers club with {partnerName}, curious to watch, explore, or join in",
      "female": "Go to a sex or swingers club with {partnerName}, curious to watch, explore, or join in",
      "result": "Go to a sex or swingers club together, curious to watch, explore, or join in"
    }
  },
  {
    "id": 127,
    "category": "Group",
    "fantasy": {
      "male": "Go to a pleasure resort with {partnerName}, where we can relax, flirt, and explore new desires together",
      "female": "Go to a pleasure resort with {partnerName}, where we can relax, flirt, and explore new desires together",
      "result": "Go to a pleasure resort together, where we can relax, flirt, and explore new desires together"
    }
  },
  {
    "id": 128,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Drip hot wax on {partnerName}'s body",
      "female": "Have {partnerName} drip hot wax on my body, feeling each drop as a teasing burn",
      "result": "Drip hot wax on {partnerName}'s body"
    }
  },
  {
    "id": 129,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Have {partnerName} drip hot wax on my body, feeling each drop as a teasing burn",
      "female": "Drip hot wax on {partnerName}'s body",
      "result": "Drip hot wax on {partnerName}'s body"
    }
  },
  {
    "id": 130,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Be edged by {partnerName}, brought to the edge of orgasm again and again without release",
      "female": "Edge {partnerName}, bringing him to the edge of orgasm again and again without release",
      "result": "Edge {partnerName} without letting him come"
    }
  },
  {
    "id": 131,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Edge {partnerName}, bringing her to the edge of orgasm again and again without release",
      "female": "Be edged by {partnerName}, brought to the edge of orgasm again and again without release",
      "result": "Edge {partnerName} without letting her come"
    }
  },
  {
    "id": 132,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Receive a foot job from {partnerName}",
      "female": "Give {partnerName} a foot job",
      "result": "Give {partnerName} a foot job"
    }
  },
  {
    "id": 133,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Douse ourselves in oil during sex with {partnerName}",
      "female": "Douse ourselves in oil during sex with {partnerName}",
      "result": "Douse yourselves in oil during sex"
    }
  },
  {
    "id": 134,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Give {partnerName} a golden shower",
      "female": "Receive a golden shower from {partnerName}",
      "result": "Give {partnerName} a golden shower"
    }
  },
  {
    "id": 135,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Receive a golden shower from {partnerName}",
      "female": "Give {partnerName} a golden shower",
      "result": "Give {partnerName} a golden shower"
    }
  },
  {
    "id": 136,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Explore spiritual or tantric sex with {partnerName}, sharing a deep emotional intimacy",
      "female": "Explore spiritual or tantric sex with {partnerName}, sharing a deep emotional intimacy",
      "result": "Explore spiritual or tantric sex with your partner"
    }
  },
  {
    "id": 137,
    "category": "Other Fetishes",
    "fantasy": {
      "male": "Explore pet or pony play with {partnerName}",
      "female": "Explore pet or pony play with {partnerName}",
      "result": "Explore pet or pony play with your partner"
    }
  }
];

export default sampleFantasies;
