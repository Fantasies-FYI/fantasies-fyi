
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FantasyCategory } from "@/data/sampleFantasies";

interface CategoryGridProps {
  categories: FantasyCategory[];
  activeCategory: FantasyCategory | null;
  onSelectCategory: (category: FantasyCategory) => void;
  categoryProgress: { [key in FantasyCategory]?: { answered: number; total: number } };
}

const CategoryGrid = ({ 
  categories, 
  onSelectCategory,
  categoryProgress
}: CategoryGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
      {categories.map((category) => {
        const progress = categoryProgress[category];
        const percentage = progress ? Math.round((progress.answered / progress.total) * 100) : 0;
        const isComplete = percentage === 100;
        
        return (
          <Card 
            key={category} 
            className={`cursor-pointer hover:shadow-md transition-shadow ${
              isComplete ? 'border-green-500 border-2' : ''
            }`}
            onClick={() => onSelectCategory(category)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-2">
                <span>{progress?.answered || 0} von {progress?.total || 0}</span>
                <span>{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-2 bg-gray-200" />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CategoryGrid;

import { Progress } from "@/components/ui/progress";
