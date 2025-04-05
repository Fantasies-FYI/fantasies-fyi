
import React, { useState, useEffect } from "react";
import OnboardingForm from "@/components/OnboardingForm";
import FantasyCard from "@/components/FantasyCard";
import ProgressBar from "@/components/ProgressBar";
import CategoryGrid from "@/components/CategoryGrid";
import FloatingMenu from "@/components/FloatingMenu";
import InfoPage from "@/components/InfoPage";
import SharingPage from "@/components/SharingPage";
import ResultsView from "@/components/ResultsView";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Fantasy, 
  FantasyCategory, 
  UserProfile, 
  AnswerType, 
  UserAnswer 
} from "@/data/sampleFantasies";
import sampleFantasies from "@/data/sampleFantasies";
import { 
  getUserProfile, 
  saveUserAnswer, 
  getUserAnswers, 
  getUserAnswerForFantasy, 
  PartnerData,
  getSharedInterests
} from "@/utils/storage";
import { toast } from "sonner";

type AppView = "categories" | "questions" | "sharing" | "info" | "results";

const Index = () => {
  // State for user information and flow control
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<AppView>("categories");
  
  // Fantasy selection state
  const [fantasies, setFantasies] = useState<Fantasy[]>(sampleFantasies);
  const [categories, setCategories] = useState<FantasyCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<FantasyCategory | null>(null);
  const [currentFantasyIndex, setCurrentFantasyIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [categoryProgress, setCategoryProgress] = useState<{
    [key in FantasyCategory]?: { answered: number; total: number };
  }>({});
  
  // Partner data
  const [partnerData, setPartnerData] = useState<PartnerData | null>(null);
  const [sharedFantasies, setSharedFantasies] = useState<Fantasy[]>([]);
  const [resultsViewed, setResultsViewed] = useState<boolean>(false);
  
  // Initialize application data
  useEffect(() => {
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
    }
    
    if (savedAnswers) {
      setAnswers(savedAnswers);
    }
    
    // Calculate progress per category
    const progress: {
      [key in FantasyCategory]?: { answered: number; total: number };
    } = {};
    
    uniqueCategories.forEach(category => {
      const categoryFantasies = sampleFantasies.filter(f => f.category === category);
      const answeredCount = savedAnswers.filter(
        answer => categoryFantasies.some(f => f.id === answer.fantasyId)
      ).length;
      
      progress[category] = {
        answered: answeredCount,
        total: categoryFantasies.length
      };
    });
    
    setCategoryProgress(progress);
    setIsLoading(false);
  }, []);
  
  // Check if all questions are answered
  const areAllQuestionsAnswered = () => {
    const totalFantasies = sampleFantasies.length;
    return answers.length === totalFantasies;
  };
  
  // Handle onboarding completion
  const handleOnboardingComplete = (completedProfile: UserProfile) => {
    setProfile(completedProfile);
  };
  
  // Handle fantasy answer selection
  const handleAnswerSelection = (answer: AnswerType, fantasyId: number) => {
    if (resultsViewed) {
      toast.error("Du kannst deine Antworten nicht mehr ändern, nachdem du die Ergebnisse gesehen hast.");
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
    setCurrentFantasyIndex(0);
    
    setCurrentView("questions");
  };
  
  const handlePreviousFantasy = () => {
    if (currentFantasyIndex > 0) {
      setCurrentFantasyIndex(currentFantasyIndex - 1);
    }
  };
  
  const handleNextFantasy = () => {
    if (currentFantasyIndex < fantasies.length - 1) {
      setCurrentFantasyIndex(currentFantasyIndex + 1);
    }
  };
  
  const handlePartnerCodeProcessed = (data: PartnerData) => {
    if (!areAllQuestionsAnswered()) {
      toast.error("Du musst zuerst alle Fragen beantworten, bevor du die Ergebnisse sehen kannst.");
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
    setAnswers([]);
    
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
    setResultsViewed(false);
    setCurrentView("categories");
  };
  
  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lade Fantasy Shared Hearts...</h1>
        </div>
      </div>
    );
  }
  
  // Onboarding for new users
  if (!profile || !profile.completedOnboarding) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <OnboardingForm onComplete={handleOnboardingComplete} />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pb-24">
      {currentView === "categories" && (
        <div className="p-4">
          <h2 className="text-xl font-bold text-center mb-6">
            Wähle eine Kategorie
          </h2>
          <CategoryGrid 
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            categoryProgress={categoryProgress}
          />
          
          {!areAllQuestionsAnswered() && (
            <div className="text-center mt-8">
              <p className="mb-4">Bitte beantworte alle Fragen, um die Ergebnisse zu sehen.</p>
            </div>
          )}
          
          <FloatingMenu 
            onInfoClick={() => setCurrentView("info")}
            onShareClick={() => setCurrentView("sharing")}
            inCategoryView={false}
          />
        </div>
      )}
      
      {currentView === "questions" && activeCategory && (
        <div className="h-full">
          <ScrollArea className="h-[calc(100vh-16px)]">
            <div className="w-full max-w-md mx-auto p-4 pb-28">
              {fantasies.map((fantasy) => {
                const currentAnswer = getUserAnswerForFantasy(fantasy.id);
                const isAnswered = answers.some(a => a.fantasyId === fantasy.id);
                
                return (
                  <FantasyCard 
                    key={fantasy.id}
                    fantasy={fantasy} 
                    currentAnswer={currentAnswer}
                    onAnswer={(answer) => handleAnswerSelection(answer, fantasy.id)}
                    isAnswered={isAnswered}
                  />
                );
              })}
            </div>
          </ScrollArea>
          
          <FloatingMenu 
            showBackButton={true}
            onInfoClick={() => setCurrentView("info")}
            onShareClick={() => setCurrentView("sharing")}
            onBackClick={() => setCurrentView("categories")}
            inCategoryView={true}
          />
        </div>
      )}
      
      {currentView === "sharing" && (
        <div className="p-4">
          <SharingPage 
            onClose={() => setCurrentView("categories")} 
            onPartnerCodeProcessed={handlePartnerCodeProcessed}
            setResultsViewed={setResultsViewed}
            resultsViewed={resultsViewed}
          />
        </div>
      )}
      
      {currentView === "info" && (
        <div className="p-4">
          <InfoPage 
            onClose={() => setCurrentView("categories")} 
            onReset={handleResetAnswers}
          />
        </div>
      )}
      
      {currentView === "results" && partnerData && (
        <div className="p-4 pb-24">
          <ResultsView 
            sharedFantasies={sharedFantasies}
            userAnswers={answers}
            partnerAnswers={partnerData.answers}
            partnerName={partnerData.profile.name}
          />
          
          <FloatingMenu 
            showBackButton={true}
            onInfoClick={() => setCurrentView("info")}
            onShareClick={() => setCurrentView("sharing")}
            onBackClick={() => setCurrentView("categories")}
            inCategoryView={true}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
