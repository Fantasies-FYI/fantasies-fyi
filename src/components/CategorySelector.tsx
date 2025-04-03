
import React from "react";
import { Button } from "@/components/ui/button";
import { Fantasy, FantasyCategory } from "@/data/sampleFantasies";

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
          
          return (
            <Button
              key={category}
              variant={category === activeCategory ? "default" : "outline"}
              className={`whitespace-nowrap ${
                category === activeCategory 
                  ? "bg-primary text-primary-foreground" 
                  : "text-foreground"
              }`}
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
