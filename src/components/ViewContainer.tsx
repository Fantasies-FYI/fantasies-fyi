
import React from "react";
import CategoryView from "@/components/CategoryView";
import QuestionsView from "@/components/QuestionsView";
import SharingPage from "@/components/SharingPage";
import InfoPage from "@/components/InfoPage";
import ResultsView from "@/components/ResultsView";
import FloatingMenu from "@/components/FloatingMenu";
import { Fantasy, FantasyCategory, UserAnswer, AnswerType } from "@/data/sampleFantasies";
import { PartnerData } from "@/utils/storage";

type AppView = "categories" | "questions" | "sharing" | "info" | "results";

interface ViewContainerProps {
  currentView: AppView;
  categories: FantasyCategory[];
  activeCategory: FantasyCategory | null;
  fantasies: Fantasy[];
  answers: UserAnswer[];
  categoryProgress: { [key in FantasyCategory]?: { answered: number; total: number } };
  partnerData: PartnerData | null;
  sharedFantasies: Fantasy[];
  resultsViewed: boolean;
  areAllQuestionsAnswered: boolean;
  onSelectCategory: (category: FantasyCategory) => void;
  onAnswerSelection: (answer: AnswerType, fantasyId: number) => void;
  handlePartnerCodeProcessed: (data: PartnerData) => void;
  setResultsViewed: (viewed: boolean) => void;
  setCurrentView: (view: AppView) => void;
  handleResetAnswers: () => void;
}

const ViewContainer = ({
  currentView,
  categories,
  activeCategory,
  fantasies,
  answers,
  categoryProgress,
  partnerData,
  sharedFantasies,
  resultsViewed,
  areAllQuestionsAnswered,
  onSelectCategory,
  onAnswerSelection,
  handlePartnerCodeProcessed,
  setResultsViewed,
  setCurrentView,
  handleResetAnswers
}: ViewContainerProps) => {
  
  // Helper functions for navigation
  const navigateToCategories = () => setCurrentView("categories");
  const navigateToInfo = () => setCurrentView("info");
  const navigateToSharing = () => setCurrentView("sharing");
  
  // Render the appropriate view based on currentView
  return (
    <div className="min-h-screen pb-24">
      {currentView === "categories" && (
        <CategoryView 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={onSelectCategory}
          categoryProgress={categoryProgress}
          onInfoClick={navigateToInfo}
          onShareClick={navigateToSharing}
          areAllQuestionsAnswered={areAllQuestionsAnswered}
        />
      )}
      
      {currentView === "questions" && activeCategory && (
        <QuestionsView 
          fantasies={fantasies}
          answers={answers}
          onAnswerSelection={onAnswerSelection}
          onBackClick={navigateToCategories}
          onInfoClick={navigateToInfo}
          onShareClick={navigateToSharing}
        />
      )}
      
      {currentView === "sharing" && (
        <div className="p-4">
          <SharingPage 
            onClose={navigateToCategories} 
            onPartnerCodeProcessed={handlePartnerCodeProcessed}
            setResultsViewed={setResultsViewed}
            resultsViewed={resultsViewed}
          />
        </div>
      )}
      
      {currentView === "info" && (
        <div className="p-4">
          <InfoPage 
            onClose={navigateToCategories} 
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
            onInfoClick={navigateToInfo}
            onShareClick={navigateToSharing}
            onBackClick={navigateToCategories}
            inCategoryView={true}
          />
        </div>
      )}
    </div>
  );
};

export default ViewContainer;
