
import React, { useState, useEffect } from "react";
import OnboardingForm from "@/components/OnboardingForm";
import FantasyCard from "@/components/FantasyCard";
import ProgressBar from "@/components/ProgressBar";
import CategoryGrid from "@/components/CategoryGrid";
import Navigation from "@/components/Navigation";
import InfoPage from "@/components/InfoPage";
import SharingPage from "@/components/SharingPage";
import ResultsView from "@/components/ResultsView";
import { Button } from "@/components/ui/button";
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
import { Info, Share2 } from "lucide-react";

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
  const handleAnswerSelection = (answer: AnswerType) => {
    if (resultsViewed) {
      toast.error("Du kannst deine Antworten nicht mehr ändern, nachdem du die Ergebnisse gesehen hast.");
      return;
    }
    
    const currentFantasy = fantasies[currentFantasyIndex];
    
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
      
      // Move to next fantasy if available
      if (currentFantasyIndex < fantasies.length - 1) {
        setCurrentFantasyIndex(currentFantasyIndex + 1);
      } else {
        toast.success("Du hast alle Fantasien in dieser Kategorie beantwortet!");
        setCurrentView("categories");
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
  
  const renderNavigation = () => {
    if (currentView === "categories") {
      return (
        <div className="w-full max-w-4xl mx-auto mb-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Fantasy Shared Hearts</h1>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setCurrentView("info")}
              title="Information"
            >
              <Info className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setCurrentView("sharing")}
              title="Teilen"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      );
    }
    
    return (
      <div className="w-full max-w-4xl mx-auto mb-6 flex justify-between items-center">
        <Button variant="ghost" onClick={() => setCurrentView("categories")}>
          &larr; Zurück zur Übersicht
        </Button>
        {currentView === "questions" && activeCategory && (
          <h2 className="text-lg font-semibold">{activeCategory}</h2>
        )}
        <div className="w-24"></div>
      </div>
    );
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
    <div className="min-h-screen p-4 pb-16">
      {renderNavigation()}
      
      {currentView === "categories" && (
        <>
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
        </>
      )}
      
      {currentView === "questions" && activeCategory && (
        <>
          <ProgressBar 
            answered={categoryProgress[activeCategory]?.answered || 0}
            total={categoryProgress[activeCategory]?.total || fantasies.length}
          />
          
          {fantasies.length > 0 && currentFantasyIndex < fantasies.length && (
            <FantasyCard 
              fantasy={fantasies[currentFantasyIndex]} 
              currentAnswer={getUserAnswerForFantasy(fantasies[currentFantasyIndex].id)}
              onAnswer={handleAnswerSelection}
            />
          )}
          
          <div className="flex justify-center mt-6 space-x-4">
            <Button 
              variant="outline" 
              onClick={handlePreviousFantasy}
              disabled={currentFantasyIndex <= 0}
            >
              Vorherige
            </Button>
            <Button 
              variant="outline" 
              onClick={handleNextFantasy}
              disabled={currentFantasyIndex >= fantasies.length - 1}
            >
              Nächste
            </Button>
          </div>
        </>
      )}
      
      {currentView === "sharing" && (
        <SharingPage 
          onClose={() => setCurrentView("categories")} 
          onPartnerCodeProcessed={handlePartnerCodeProcessed}
        />
      )}
      
      {currentView === "info" && (
        <InfoPage onClose={() => setCurrentView("categories")} />
      )}
      
      {currentView === "results" && partnerData && (
        <ResultsView 
          sharedFantasies={sharedFantasies}
          userAnswers={answers}
          partnerAnswers={partnerData.answers}
          partnerName={partnerData.profile.name}
        />
      )}
    </div>
  );
};

export default Index;
