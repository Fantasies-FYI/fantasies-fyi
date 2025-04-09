
export type FantasyCategory = 
  | "Romantic Fantasies"
  | "Role Play"
  | "Locations"
  | "Positions"
  | "Accessories";

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
      background: "#1e3a8a", // deep blue
      text: "#ffffff",
      border: "#3b82f6"
    }
  },
  {
    name: "Role Play",
    colors: {
      background: "#7c2d12", // deep orange/brown
      text: "#ffffff",
      border: "#f97316"
    }
  },
  {
    name: "Locations",
    colors: {
      background: "#065f46", // deep green
      text: "#ffffff",
      border: "#10b981"
    }
  },
  {
    name: "Positions",
    colors: {
      background: "#4c1d95", // deep purple
      text: "#ffffff",
      border: "#8b5cf6"
    }
  },
  {
    name: "Accessories",
    colors: {
      background: "#831843", // deep pink/magenta
      text: "#ffffff",
      border: "#ec4899"
    }
  }
];

// Helper function to get colors for a category
export const getCategoryColors = (category: FantasyCategory): CategoryColors => {
  const found = categoryData.find(cat => cat.name === category);
  if (!found) {
    // Default colors if category not found
    return {
      background: "#1e293b",
      text: "#ffffff",
      border: "#475569"
    };
  }
  return found.colors;
};

// Sample fantasies for development purposes
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
  }
];

export default sampleFantasies;
