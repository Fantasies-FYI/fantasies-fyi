
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import FloatingMenu from "@/components/FloatingMenu";
import FantasyCard from "@/components/FantasyCard";
import { Fantasy, AnswerType, getCategoryColors } from "@/data/sampleFantasies";
import { getUserAnswerForFantasy } from "@/utils/storage";

interface QuestionsViewProps {
  fantasies: Fantasy[];
  answers: Array<{ fantasyId: number; answer: AnswerType }>;
  onAnswerSelection: (answer: AnswerType, fantasyId: number) => void;
  onBackClick: () => void;
  onInfoClick: () => void;
  onShareClick: () => void;
}

const QuestionsView = ({ 
  fantasies, 
  answers, 
  onAnswerSelection,
  onBackClick,
  onInfoClick,
  onShareClick
}: QuestionsViewProps) => {
  // Get the category from the first fantasy (they should all be the same category)
  const categoryName = fantasies.length > 0 ? fantasies[0].category : "";
  const categoryColors = getCategoryColors(categoryName);
  
  return (
    <div className="h-full">
      <ScrollArea className="h-[calc(100vh-16px)]">
        <div className="w-full max-w-md mx-auto p-4 pb-28">
          <h2 
            className="text-xl font-bold text-center mb-6"
            style={{ color: categoryColors.text }}
          >
            {categoryName}
          </h2>

          {fantasies.map((fantasy) => {
            const currentAnswer = getUserAnswerForFantasy(fantasy.id);
            const isAnswered = answers.some(a => a.fantasyId === fantasy.id);
            
            return (
              <FantasyCard 
                key={fantasy.id}
                fantasy={fantasy} 
                currentAnswer={currentAnswer}
                onAnswer={(answer) => onAnswerSelection(answer, fantasy.id)}
                isAnswered={isAnswered}
                categoryColors={categoryColors}
              />
            );
          })}
        </div>
      </ScrollArea>
      
      <FloatingMenu 
        showBackButton={true}
        onInfoClick={onInfoClick}
        onShareClick={onShareClick}
        onBackClick={onBackClick}
        inCategoryView={true}
      />
    </div>
  );
};

export default QuestionsView;
