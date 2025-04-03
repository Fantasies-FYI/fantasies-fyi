
import React, { useState, useEffect } from "react";
import OnboardingForm from "@/components/OnboardingForm";
import FantasyCard from "@/components/FantasyCard";
import ProgressBar from "@/components/ProgressBar";
import CategorySelector from "@/components/CategorySelector";
import Navigation from "@/components/Navigation";
import SharingCode from "@/components/SharingCode";
import PartnerCodeInput from "@/components/PartnerCodeInput";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  // State for user information and flow control
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"answer" | "results">("answer");
  
  // Fantasy selection state
  const [fantasies, setFantasies] = useState<Fantasy[]>(sampleFantasies);
  const [categories, setCategories] = useState<FantasyCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<FantasyCategory | null>(null);
  const [currentFantasyIndex, setCurrentFantasyIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [categoryProgress, setCategoryProgress] = useState<{
    [key in FantasyCategory]?: { answered: number; total: number };
  }>({});
  
  // Modal states
  const [showSharingCode, setShowSharingCode] = useState(false);
  const [showPartnerCodeInput, setShowPartnerCodeInput] = useState(false);
  
  // Partner data
  const [partnerData, setPartnerData] = useState<PartnerData | null>(null);
  const [sharedFantasies, setSharedFantasies] = useState<Fantasy[]>([]);
  
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
    
    // Set default active category if none selected
    if (uniqueCategories.length > 0 && !activeCategory) {
      setActiveCategory(uniqueCategories[0]);
    }
    
    setIsLoading(false);
  }, []);
  
  // Filter fantasies when active category changes
  useEffect(() => {
    if (activeCategory) {
      const categoryFantasies = sampleFantasies.filter(
        f => f.category === activeCategory
      );
      setFantasies(categoryFantasies);
      setCurrentFantasyIndex(0);
    }
  }, [activeCategory]);
  
  // Handle onboarding completion
  const handleOnboardingComplete = (completedProfile: UserProfile) => {
    setProfile(completedProfile);
  };
  
  // Handle fantasy answer selection
  const handleAnswerSelection = (answer: AnswerType) => {
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
      }
    }
  };
  
  // Navigation handlers
  const handleSelectCategory = (category: FantasyCategory) => {
    setActiveCategory(category);
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
  
  const handleShowHome = () => {
    setActiveTab("answer");
    setShowSharingCode(false);
    setShowPartnerCodeInput(false);
  };
  
  const handleShowResults = () => {
    setActiveTab("results");
  };
  
  const handleGenerateCode = () => {
    setShowSharingCode(true);
  };
  
  const handleEnterPartnerCode = () => {
    setShowPartnerCodeInput(true);
  };
  
  const handlePartnerCodeProcessed = (data: PartnerData) => {
    setPartnerData(data);
    setShowPartnerCodeInput(false);
    
    // Calculate shared interests
    const userAnswers = getUserAnswers();
    const sharedIds = getSharedInterests(userAnswers, data.answers);
    
    // Get the fantasy objects for shared IDs
    const shared = sampleFantasies.filter(fantasy => sharedIds.includes(fantasy.id));
    setSharedFantasies(shared);
    
    // Show results
    setActiveTab("results");
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
  
  // Show sharing code modal if active
  if (showSharingCode) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <SharingCode onClose={() => setShowSharingCode(false)} />
      </div>
    );
  }
  
  // Show partner code input if active
  if (showPartnerCodeInput) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <PartnerCodeInput 
          onCodeProcessed={handlePartnerCodeProcessed} 
          onCancel={() => setShowPartnerCodeInput(false)} 
        />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-4 pb-16">
      <Navigation 
        onHome={handleShowHome}
        onShowResults={handleShowResults}
        onGenerateCode={handleGenerateCode}
        onEnterPartnerCode={handleEnterPartnerCode}
      />
      
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "answer" | "results")}>
        <TabsList className="w-full max-w-md mx-auto mb-6">
          <TabsTrigger value="answer" className="flex-1">Fantasien beantworten</TabsTrigger>
          <TabsTrigger value="results" className="flex-1">Ergebnisse anzeigen</TabsTrigger>
        </TabsList>
        
        <TabsContent value="answer">
          <CategorySelector 
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            categoryProgress={categoryProgress}
          />
          
          {activeCategory && (
            <ProgressBar 
              answered={categoryProgress[activeCategory]?.answered || 0}
              total={categoryProgress[activeCategory]?.total || fantasies.length}
            />
          )}
          
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
        </TabsContent>
        
        <TabsContent value="results">
          {partnerData ? (
            <ResultsView 
              sharedFantasies={sharedFantasies}
              userAnswers={answers}
              partnerAnswers={partnerData.answers}
              partnerName={partnerData.profile.name}
            />
          ) : (
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold mb-4">Keine Ergebnisse verfügbar</h2>
              <p className="mb-4">
                Du musst zuerst einen Partner-Code eingeben, um geteilte Fantasien zu sehen.
              </p>
              <Button onClick={handleEnterPartnerCode}>
                Partner-Code eingeben
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
