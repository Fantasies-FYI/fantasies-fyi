
import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  answered: number;
  total: number;
}

const ProgressBar = ({ answered, total }: ProgressBarProps) => {
  const percentage = total > 0 ? Math.round((answered / total) * 100) : 0;

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="flex justify-between mb-2 text-sm font-medium">
        <span>{answered} von {total} beantwortet</span>
        <span>{percentage}% abgeschlossen</span>
      </div>
      <Progress value={percentage} className="h-2 bg-gray-200" />
    </div>
  );
};

export default ProgressBar;
