
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FantasyCategory } from "@/data/sampleFantasies";
import { Check } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  // Calculate if all questions are answered
  const allQuestionsAnswered = categories.every(
    category => {
      const progress = categoryProgress[category];
      return progress && progress.answered === progress.total;
    }
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
      {categories.map((category) => {
        const progress = categoryProgress[category];
        const isComplete = progress ? progress.answered === progress.total : false;
        
        return (
          <Card 
            key={category} 
            className={`cursor-pointer hover:shadow-md transition-shadow relative ${
              isComplete ? 'border-green-500 border-2' : ''
            }`}
            onClick={() => onSelectCategory(category)}
          >
            <AspectRatio ratio={1 / 1}>
              <div className="absolute inset-0 p-4 flex flex-col">
                <CardHeader className="p-0 pb-2 flex-shrink-0">
                  <CardTitle className="text-xl md:text-2xl flex items-center">
                    <span>{category}</span>
                    {isComplete && (
                      <Check className="w-5 h-5 ml-2 text-green-500" />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col justify-between">
                  <div className="text-sm font-medium">
                    <span>{progress?.answered || 0} / {progress?.total || 0}</span>
                  </div>
                  
                  {/* Category Icon */}
                  <div className="absolute bottom-2 right-2 opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"/>
                    </svg>
                  </div>
                </CardContent>
              </div>
            </AspectRatio>
          </Card>
        );
      })}
      
      {allQuestionsAnswered && (
        <div className="col-span-full mt-4 text-center">
          <p className="text-green-600 font-medium">
            Du hast alle Fragen beantwortet! Du kannst nun deine Ergebnisse teilen.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryGrid;
