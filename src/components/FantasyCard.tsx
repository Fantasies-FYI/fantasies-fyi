
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fantasy, AnswerType, CategoryColors } from "@/data/sampleFantasies";
import { getUserProfile } from "@/utils/storage";
import { cn } from "@/lib/utils";

interface FantasyCardProps {
  fantasy: Fantasy;
  currentAnswer: AnswerType;
  onAnswer: (answer: AnswerType) => void;
  isAnswered: boolean;
  categoryColors: CategoryColors;
}

const FantasyCard = ({ 
  fantasy, 
  currentAnswer, 
  onAnswer, 
  isAnswered,
  categoryColors
}: FantasyCardProps) => {
  const profile = getUserProfile();
  
  if (!profile) {
    return <div>User profile not found</div>;
  }
  
  const gender = profile.gender;
  const partnerName = profile.partnerName;
  
  const fantasyText = gender === "male" 
    ? fantasy.fantasy.male.replace("{partnerName}", partnerName)
    : fantasy.fantasy.female.replace("{partnerName}", partnerName);

  // Create button styles based on category colors
  const buttonBaseStyle = {
    backgroundColor: categoryColors.background,
    color: 'white',
    border: 'none',
    filter: 'brightness(0.8)',
  };
  
  const buttonActiveStyle = {
    backgroundColor: categoryColors.background,
    filter: 'brightness(0.6)',
  };

  return (
    <Card 
      className={`w-full mb-6 ${isAnswered ? 'opacity-90' : 'opacity-100'} transition-opacity shadow-md border-0`}
      style={{
        backgroundColor: categoryColors.background,
        color: "#ffffff",
        perspective: '1000px'
      }}
    >
      <CardContent className="py-6">
        <p className="text-lg text-center mb-8 text-white">{fantasyText}</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="grid grid-cols-3 gap-2 w-full">
          <Button 
            className="text-white"
            style={currentAnswer === "interested" ? buttonActiveStyle : buttonBaseStyle}
            onClick={() => onAnswer("interested")}
          >
            Yes
          </Button>
          <Button 
            className="text-white"
            style={currentAnswer === "conditionally" ? buttonActiveStyle : buttonBaseStyle}
            onClick={() => onAnswer("conditionally")}
          >
            Maybe
          </Button>
          <Button 
            className="text-white"
            style={currentAnswer === "notInterested" ? buttonActiveStyle : buttonBaseStyle}
            onClick={() => onAnswer("notInterested")}
          >
            No
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FantasyCard;
