
export type FantasyCategory = 
  | "Romantische Fantasien"
  | "Rollenspiele"
  | "Orte"
  | "Positionen"
  | "Hilfsmittel";

export type CategoryInfo = {
  name: FantasyCategory;
  color: string;
  image: string;
};

export type AnswerType = "interested" | "notInterested" | "conditionally" | null;

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

// Category information with colors and images
export const categoryInfo: CategoryInfo[] = [
  {
    name: "Romantische Fantasien",
    color: "#D946EF", // Magenta Pink
    image: "/images/romantic.jpg"
  },
  {
    name: "Rollenspiele",
    color: "#8B5CF6", // Vivid Purple
    image: "/images/roleplay.jpg"
  },
  {
    name: "Orte",
    color: "#0EA5E9", // Ocean Blue
    image: "/images/places.jpg"
  },
  {
    name: "Positionen",
    color: "#F97316", // Bright Orange
    image: "/images/positions.jpg"
  },
  {
    name: "Hilfsmittel",
    color: "#10B981", // Emerald Green
    image: "/images/tools.jpg"
  }
];

// Sample fantasies for development purposes
const sampleFantasies: Fantasy[] = [
  {
    id: 1,
    category: "Romantische Fantasien",
    fantasy: {
      male: "Ein romantisches Dinner bei Kerzenlicht mit {partnerName} genießen",
      female: "Ein romantisches Dinner bei Kerzenlicht mit {partnerName} genießen"
    }
  },
  {
    id: 2,
    category: "Romantische Fantasien",
    fantasy: {
      male: "Mit {partnerName} einen Sonnenuntergang am Strand erleben",
      female: "Mit {partnerName} einen Sonnenuntergang am Strand erleben"
    }
  },
  {
    id: 3,
    category: "Rollenspiele",
    fantasy: {
      male: "Mit {partnerName} ein Rollenspiel als Arzt und Patient erleben",
      female: "Mit {partnerName} ein Rollenspiel als Ärztin und Patient erleben"
    }
  },
  {
    id: 4,
    category: "Rollenspiele",
    fantasy: {
      male: "Mit {partnerName} ein Rollenspiel als Fremde durchführen",
      female: "Mit {partnerName} ein Rollenspiel als Fremde durchführen"
    }
  },
  {
    id: 5,
    category: "Orte",
    fantasy: {
      male: "Intimität mit {partnerName} im Freien erleben",
      female: "Intimität mit {partnerName} im Freien erleben"
    }
  },
  {
    id: 6,
    category: "Orte",
    fantasy: {
      male: "Mit {partnerName} ein Wellness-Wochenende in einem luxuriösen Hotel verbringen",
      female: "Mit {partnerName} ein Wellness-Wochenende in einem luxuriösen Hotel verbringen"
    }
  },
  {
    id: 7,
    category: "Positionen",
    fantasy: {
      male: "Neue Positionen mit {partnerName} ausprobieren",
      female: "Neue Positionen mit {partnerName} ausprobieren"
    }
  },
  {
    id: 8,
    category: "Hilfsmittel",
    fantasy: {
      male: "Mit {partnerName} Massageöle verwenden",
      female: "Mit {partnerName} Massageöle verwenden"
    }
  },
  {
    id: 9,
    category: "Hilfsmittel",
    fantasy: {
      male: "Mit {partnerName} gemeinsam erotische Filme anschauen",
      female: "Mit {partnerName} gemeinsam erotische Filme anschauen"
    }
  },
  {
    id: 10,
    category: "Romantische Fantasien",
    fantasy: {
      male: "Mit {partnerName} einen Tanzkurs besuchen",
      female: "Mit {partnerName} einen Tanzkurs besuchen"
    }
  }
];

export default sampleFantasies;
