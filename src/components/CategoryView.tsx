
import React from "react";
import CategoryGrid from "@/components/CategoryGrid";
import { FantasyCategory, categoryData } from "@/data/sampleFantasies";
import FloatingMenu from "@/components/FloatingMenu";

interface CategoryViewProps {
  categories: FantasyCategory[];
  activeCategory: FantasyCategory | null;
  onSelectCategory: (category: FantasyCategory) => void;
  categoryProgress: { [key in FantasyCategory]?: { answered: number; total: number } };
  onInfoClick: () => void;
  onShareClick: () => void;
  areAllQuestionsAnswered: boolean;
}

const CategoryView = ({
  categories,
  activeCategory,
  onSelectCategory,
  categoryProgress,
  onInfoClick,
  onShareClick,
  areAllQuestionsAnswered
}: CategoryViewProps) => {
  // Sort categories based on their order in categoryData
  const sortedCategories = [...categories].sort((a, b) => {
    const aIndex = categoryData.findIndex(cat => cat.name === a);
    const bIndex = categoryData.findIndex(cat => cat.name === b);
    return aIndex - bIndex;
  });

  // Calculate if all questions are answered across all categories
  const allQuestionsAnswered = categories.every(
    category => {
      const progress = categoryProgress[category];
      return progress && progress.answered === progress.total;
    }
  );

  return (
    <div className="p-4">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-left mb-2 mt-4">
          Choose a Category
        </h2>
        
        {allQuestionsAnswered ? (
          <p className="text-left mb-6 text-green-600">
            Du hast alle Fragen beantwortet! Du kannst nun deine Ergebnisse teilen.
          </p>
        ) : (
          <p className="text-left mb-6 text-gray-600">
            Please answer all questions to see the results.
          </p>
        )}
      </div>
      
      <CategoryGrid
        categories={sortedCategories}
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
        categoryProgress={categoryProgress}
      />
      
      <FloatingMenu 
        onInfoClick={onInfoClick}
        onShareClick={onShareClick}
        inCategoryView={false}
      />
    </div>
  );
};

export default CategoryView;
