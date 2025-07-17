
import React from "react";
import OnboardingForm from "@/components/OnboardingForm";
import ViewContainer from "@/components/ViewContainer";
import { useAppState } from "@/hooks/useAppState";

const Index = () => {
  const {
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
  } = useAppState();
  
  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading Fantasies FYI...</h1>
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
    <ViewContainer 
      currentView={currentView}
      categories={categories}
      activeCategory={activeCategory}
      fantasies={fantasies}
      answers={answers}
      categoryProgress={categoryProgress}
      partnerData={partnerData}
      sharedFantasies={sharedFantasies}
      resultsViewed={resultsViewed}
      areAllQuestionsAnswered={areAllQuestionsAnswered}
      onSelectCategory={handleSelectCategory}
      onAnswerSelection={handleAnswerSelection}
      handlePartnerCodeProcessed={handlePartnerCodeProcessed}
      setResultsViewed={setResultsViewed}
      setCurrentView={setCurrentView}
      handleResetAnswers={handleResetAnswers}
    />
  );
};

export default Index;
