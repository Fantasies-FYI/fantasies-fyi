
import React from "react";
import { Progress } from "@/components/ui/progress";
import { FantasyCategory, categoryInfo } from "@/data/sampleFantasies";

interface ProgressBarProps {
  answered: number;
  total: number;
  category?: FantasyCategory;
}

const ProgressBar = ({ answered, total, category }: ProgressBarProps) => {
  const percentage = total > 0 ? Math.round((answered / total) * 100) : 0;
  
  // Find the color for the current category
  const categoryData = category ? categoryInfo.find(c => c.name === category) : null;
  const color = categoryData?.color || "#8B5CF6"; // Default purple if no category specified

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="flex justify-between mb-2 text-sm font-medium">
        <span>{answered} von {total} beantwortet</span>
        <span>{percentage}% abgeschlossen</span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2 bg-gray-200"
        style={{ 
          "--progress-background": "rgba(0,0,0,0.1)",
          "--progress-foreground": color 
        } as React.CSSProperties} 
      />
    </div>
  );
};

export default ProgressBar;
