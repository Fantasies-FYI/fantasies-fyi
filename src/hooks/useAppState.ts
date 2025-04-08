
import { useState, useEffect } from "react";
import { 
  FantasyCategory, 
  UserProfile, 
  UserAnswer, 
  AnswerType,
  Fantasy
} from "@/data/sampleFantasies";
import sampleFantasies from "@/data/sampleFantasies";
import { 
  getUserProfile, 
  saveUserAnswer, 
  getUserAnswers, 
  getSharedInterests,
  clearUserProfile,
  clearUserAnswers,
  PartnerData
} from "@/utils/storage";
import { toast } from "sonner";

type AppView = "categories" | "questions" | "sharing" | "info" | "results";

export function useAppState() {
  // State for user information and flow control
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<AppView>("categories");
  
  // Fantasy selection state
  const [fantasies, setFantasies] = useState<Fantasy[]>(sampleFantasies);
  const [categories, setCategories] = useState<FantasyCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<FantasyCategory | null>(null);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [categoryProgress, setCategoryProgress] = useState<{
    [key in FantasyCategory]?: { answered: number; total: number };
  }>({});
  
  // Partner data
  const [partnerData, setPartnerData] = useState<PartnerData | null>(null);
  const [sharedFantasies, setSharedFantasies] = useState<Fantasy[]>([]);
  const [resultsViewed, setResultsViewed] = useState<boolean>(false);
  const [areAllQuestionsAnswered, setAreAllQuestionsAnswered] = useState<boolean>(false);
  
  // Initialize application data
  useEffect(() => {
    loadAppData();
  }, []);

  // Update areAllQuestionsAnswered whenever answers change
  useEffect(() => {
    const totalFantasies = sampleFantasies.length;
    setAreAllQuestionsAnswered(answers.length === totalFantasies);
  }, [answers]);

  const loadAppData = () => {
    // Extract unique categories
    const uniqueCategories = Array.from(
      new Set(sampleFantasies.map(f => f.category))
    ) as FantasyCategory[];
    setCategories(uniqueCategories);
    
    // Load user profile and answers
    const savedProfile = getUserProfile();
    const savedAnswers = getUserAnswers();
    
    if (savedProfile) {
      setProfile(savedProfile);
    } else {
      setProfile(null);
    }
    
    if (savedAnswers) {
      setAnswers(savedAnswers);
    } else {
      setAnswers([]);
    }
    
    // Calculate progress per category
    const progress: {
      [key in FantasyCategory]?: { answered: number; total: number };
    } = {};
    
    uniqueCategories.forEach(category => {
      const categoryFantasies = sampleFantasies.filter(f => f.category === category);
      const answeredCount = savedAnswers ? savedAnswers.filter(
        answer => categoryFantasies.some(f => f.id === answer.fantasyId)
      ).length : 0;
      
      progress[category] = {
        answered: answeredCount,
        total: categoryFantasies.length
      };
    });
    
    setCategoryProgress(progress);
    
    // Check if all questions are answered
    const totalFantasies = sampleFantasies.length;
    setAreAllQuestionsAnswered(savedAnswers ? savedAnswers.length === totalFantasies : false);
    
    setIsLoading(false);
  };
  
  // Helper function to check if all questions are answered
  const checkAllQuestionsAnswered = () => {
    const totalFantasies = sampleFantasies.length;
    return answers.length === totalFantasies;
  };
  
  // Handle fantasy answer selection
  const handleAnswerSelection = (answer: AnswerType, fantasyId: number) => {
    if (resultsViewed) {
      toast.error("You cannot change your answers after viewing the results.");
      return;
    }
    
    const currentFantasy = fantasies.find(f => f.id === fantasyId);
    
    if (currentFantasy) {
      // Save the answer
      saveUserAnswer(currentFantasy.id, answer);
      
      // Update local state
      const newAnswers = [...answers];
      const existingIndex = newAnswers.findIndex(a => a.fantasyId === currentFantasy.id);
      
      if (existingIndex >= 0) {
        newAnswers[existingIndex] = { fantasyId: currentFantasy.id, answer };
      } else {
        newAnswers.push({ fantasyId: currentFantasy.id, answer });
      }
      
      setAnswers(newAnswers);
      
      // Update category progress
      if (activeCategory) {
        const newProgress = { ...categoryProgress };
        const currentProgress = newProgress[activeCategory] || { answered: 0, total: fantasies.length };
        
        // Only increment if this wasn't already answered
        if (existingIndex < 0) {
          newProgress[activeCategory] = {
            ...currentProgress,
            answered: currentProgress.answered + 1
          };
          setCategoryProgress(newProgress);
        }
      }
      
      // Update areAllQuestionsAnswered state after adding the answer
      setAreAllQuestionsAnswered(checkAllQuestionsAnswered());
    }
  };
  
  // Navigation handlers
  const handleSelectCategory = (category: FantasyCategory) => {
    setActiveCategory(category);
    
    // Filter fantasies when active category changes
    const categoryFantasies = sampleFantasies.filter(
      f => f.category === category
    );
    setFantasies(categoryFantasies);
    
    setCurrentView("questions");
  };
  
  const handlePartnerCodeProcessed = (data: PartnerData) => {
    if (!areAllQuestionsAnswered) {
      toast.error("You must answer all questions before you can see the results.");
      setCurrentView("categories");
      return;
    }
    
    setPartnerData(data);
    
    // Calculate shared interests
    const userAnswers = getUserAnswers();
    const sharedIds = getSharedInterests(userAnswers, data.answers);
    
    // Get the fantasy objects for shared IDs
    const shared = sampleFantasies.filter(fantasy => sharedIds.includes(fantasy.id));
    setSharedFantasies(shared);
    
    // Mark results as viewed to prevent answer changes
    setResultsViewed(true);
    
    // Show results
    setCurrentView("results");
  };

  const handleResetAnswers = () => {
    // Clear data from localStorage
    clearUserProfile();
    clearUserAnswers();
    
    // Reset all state
    setProfile(null);
    setAnswers([]);
    setResultsViewed(false);
    
    // Reset category progress
    const resetProgress: {
      [key in FantasyCategory]?: { answered: number; total: number };
    } = {};
    
    categories.forEach(category => {
      const categoryFantasies = sampleFantasies.filter(f => f.category === category);
      resetProgress[category] = {
        answered: 0,
        total: categoryFantasies.length
      };
    });
    
    setCategoryProgress(resetProgress);
    setAreAllQuestionsAnswered(false);
    
    // Return to main view (onboarding will show automatically)
    setCurrentView("categories");
  };
  
  // Handle onboarding completion
  const handleOnboardingComplete = (completedProfile: UserProfile) => {
    setProfile(completedProfile);
  };

  return {
    profile,
    isLoading,
    currentView,
    fantasies,
    categories,
    activeCategory,
    answers,
    categoryProgress,
    partnerData,
    sharedFantasies,
    resultsViewed,
    areAllQuestionsAnswered,
    setCurrentView,
    handleAnswerSelection,
    handleSelectCategory,
    handlePartnerCodeProcessed,
    handleResetAnswers,
    handleOnboardingComplete,
    setResultsViewed
  };
}
