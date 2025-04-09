
import React from "react";
import { Button } from "@/components/ui/button";
import { FantasyCategory, getCategoryColors } from "@/data/sampleFantasies";

interface CategorySelectorProps {
  categories: FantasyCategory[];
  activeCategory: FantasyCategory | null;
  onSelectCategory: (category: FantasyCategory) => void;
  categoryProgress: { [key in FantasyCategory]?: { answered: number; total: number } };
}

const CategorySelector = ({ 
  categories, 
  activeCategory, 
  onSelectCategory,
  categoryProgress
}: CategorySelectorProps) => {
  return (
    <div className="w-full max-w-md mx-auto overflow-x-auto mb-8">
      <div className="flex space-x-2 pb-2">
        {categories.map((category) => {
          const progress = categoryProgress[category];
          const percentage = progress ? Math.round((progress.answered / progress.total) * 100) : 0;
          const colors = getCategoryColors(category);
          const isActive = category === activeCategory;
          
          return (
            <Button
              key={category}
              variant="outline"
              style={{
                backgroundColor: isActive ? colors.background : 'transparent',
                color: isActive ? colors.text : 'currentColor',
                borderColor: colors.border
              }}
              className="whitespace-nowrap transition-colors"
              onClick={() => onSelectCategory(category)}
            >
              {category}
              {progress && (
                <span className="ml-2 text-xs">
                  {percentage}%
                </span>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
