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
    name: "Romantic Fantasies",
    colors: {
      background: "#d84c7b", // pink
      text: "#ffffff",
      border: "#d84c7b"
    }
  },
  {
    name: "Role Play",
    colors: {
      background: "#f3933d", // orange
      text: "#ffffff",
      border: "#f3933d"
    }
  },
  {
    name: "Locations",
    colors: {
      background: "#f9c74f", // yellow
      text: "#ffffff",
      border: "#f9c74f"
    }
  },
  {
    name: "Positions",
    colors: {
      background: "#90be6d", // green
      text: "#ffffff",
      border: "#90be6d"
    }
  },
  {
    name: "Accessories",
    colors: {
      background: "#74c7d4", // light blue
      text: "#ffffff",
      border: "#74c7d4"
    }
  },
  {
    name: "Sensory Play",
    colors: {
      background: "#4d96e3", // blue
      text: "#ffffff",
      border: "#4d96e3"
    }
  },
  {
    name: "Outdoor Adventures",
    colors: {
      background: "#a866c7", // purple
      text: "#ffffff",
      border: "#a866c7"
    }
  },
  {
    name: "Spontaneous Encounters",
    colors: {
      background: "#d84c7b", // pink (repeated)
      text: "#ffffff",
      border: "#d84c7b"
    }
  },
  {
    name: "Power Dynamics",
    colors: {
      background: "#f3933d", // orange (repeated)
      text: "#ffffff",
      border: "#f3933d"
    }
  },
  {
    name: "Erotic Massage",
    colors: {
      background: "#f9c74f", // yellow (repeated)
      text: "#ffffff",
      border: "#f9c74f"
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
    id: 1,
    category: "Romantic Fantasies",
    fantasy: {
      male: "Enjoy a romantic candle-lit dinner with {partnerName}",
      female: "Enjoy a romantic candle-lit dinner with {partnerName}"
    }
  },
  {
    id: 2,
    category: "Romantic Fantasies",
    fantasy: {
      male: "Experience a sunset on the beach with {partnerName}",
      female: "Experience a sunset on the beach with {partnerName}"
    }
  },
  {
    id: 3,
    category: "Role Play",
    fantasy: {
      male: "Experience a role-play as doctor and patient with {partnerName}",
      female: "Experience a role-play as doctor and patient with {partnerName}"
    }
  },
  {
    id: 4,
    category: "Role Play",
    fantasy: {
      male: "Conduct a role-play as strangers with {partnerName}",
      female: "Conduct a role-play as strangers with {partnerName}"
    }
  },
  {
    id: 5,
    category: "Locations",
    fantasy: {
      male: "Experience intimacy with {partnerName} outdoors",
      female: "Experience intimacy with {partnerName} outdoors"
    }
  },
  {
    id: 6,
    category: "Locations",
    fantasy: {
      male: "Spend a wellness weekend with {partnerName} in a luxurious hotel",
      female: "Spend a wellness weekend with {partnerName} in a luxurious hotel"
    }
  },
  {
    id: 7,
    category: "Positions",
    fantasy: {
      male: "Try new positions with {partnerName}",
      female: "Try new positions with {partnerName}"
    }
  },
  {
    id: 8,
    category: "Accessories",
    fantasy: {
      male: "Use massage oils with {partnerName}",
      female: "Use massage oils with {partnerName}"
    }
  },
  {
    id: 9,
    category: "Accessories",
    fantasy: {
      male: "Watch erotic films together with {partnerName}",
      female: "Watch erotic films together with {partnerName}"
    }
  },
  {
    id: 10,
    category: "Romantic Fantasies",
    fantasy: {
      male: "Take a dance class with {partnerName}",
      female: "Take a dance class with {partnerName}"
    }
  },
  {
    id: 11,
    category: "Sensory Play",
    fantasy: {
      male: "Blindfold {partnerName} and tease with ice cubes",
      female: "Be blindfolded by {partnerName} and teased with ice cubes"
    }
  },
  {
    id: 12,
    category: "Sensory Play",
    fantasy: {
      male: "Use feathers to tease {partnerName}'s body",
      female: "Have {partnerName} tease your body with feathers"
    }
  },
  {
    id: 13,
    category: "Outdoor Adventures",
    fantasy: {
      male: "Skinny dipping with {partnerName} at night",
      female: "Skinny dipping with {partnerName} at night"
    }
  },
  {
    id: 14,
    category: "Outdoor Adventures",
    fantasy: {
      male: "Go hiking to a secluded spot with {partnerName}",
      female: "Go hiking to a secluded spot with {partnerName}"
    }
  },
  {
    id: 15,
    category: "Spontaneous Encounters",
    fantasy: {
      male: "Surprise {partnerName} with intimacy when least expected",
      female: "Surprise {partnerName} with intimacy when least expected"
    }
  },
  {
    id: 16,
    category: "Spontaneous Encounters",
    fantasy: {
      male: "Send {partnerName} a suggestive message during work hours",
      female: "Send {partnerName} a suggestive message during work hours"
    }
  },
  {
    id: 17,
    category: "Power Dynamics",
    fantasy: {
      male: "Let {partnerName} take complete control in the bedroom",
      female: "Take complete control in the bedroom with {partnerName}"
    }
  },
  {
    id: 18,
    category: "Power Dynamics",
    fantasy: {
      male: "Engage in a dominant/submissive roleplay with {partnerName}",
      female: "Engage in a dominant/submissive roleplay with {partnerName}"
    }
  },
  {
    id: 19,
    category: "Erotic Massage",
    fantasy: {
      male: "Give {partnerName} a full body massage with essential oils",
      female: "Receive a full body massage with essential oils from {partnerName}"
    }
  },
  {
    id: 20,
    category: "Erotic Massage",
    fantasy: {
      male: "Learn professional massage techniques to use on {partnerName}",
      female: "Have {partnerName} learn professional massage techniques to use on you"
    }
  }
];

export default sampleFantasies;
