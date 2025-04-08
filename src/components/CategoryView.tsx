
import React from "react";
import CategoryGrid from "@/components/CategoryGrid";
import { FantasyCategory } from "@/data/sampleFantasies";
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
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center mb-6">
        Choose a Category
      </h2>
      <CategoryGrid 
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
        categoryProgress={categoryProgress}
      />
      
      {!areAllQuestionsAnswered && (
        <div className="text-center mt-8">
          <p className="mb-4">Please answer all questions to see the results.</p>
        </div>
      )}
      
      <FloatingMenu 
        onInfoClick={onInfoClick}
        onShareClick={onShareClick}
        inCategoryView={false}
      />
    </div>
  );
};

export default CategoryView;
