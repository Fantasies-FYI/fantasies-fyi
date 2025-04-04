
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FantasyCategory, categoryInfo } from "@/data/sampleFantasies";
import { Progress } from "@/components/ui/progress";
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
      {categories.map((category) => {
        const progress = categoryProgress[category];
        const percentage = progress ? Math.round((progress.answered / progress.total) * 100) : 0;
        const isComplete = percentage === 100;
        
        // Find category info with color and image
        const info = categoryInfo.find(c => c.name === category);
        const color = info?.color || "#8B5CF6"; // Default purple if not found
        const image = info?.image || "/placeholder.svg"; // Default placeholder if not found
        
        return (
          <Card 
            key={category} 
            className="cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105 animate-card-appear"
            onClick={() => onSelectCategory(category)}
            style={{ backgroundColor: `${color}10` }} // Very light version of color
          >
            <div className="relative">
              <AspectRatio ratio={1 / 1} className="w-full">
                <img 
                  src={image}
                  alt={category}
                  className="object-cover w-full h-full rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-lg"></div>
              </AspectRatio>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center justify-between">
                <span>{category}</span>
                {isComplete && (
                  <Check className="w-5 h-5 text-green-500" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-2">
                <span>{progress?.answered || 0} von {progress?.total || 0}</span>
                <span>{percentage}%</span>
              </div>
              <Progress 
                value={percentage} 
                className="h-2 bg-gray-200" 
                style={{ 
                  "--progress-background": "rgba(0,0,0,0.1)",
                  "--progress-foreground": color 
                } as React.CSSProperties}
              />
            </CardContent>
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
