
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fantasy, AnswerType, getCategoryColors } from "@/data/sampleFantasies";
import { getUserProfile } from "@/utils/storage";

interface FantasyCardProps {
  fantasy: Fantasy;
  currentAnswer: AnswerType;
  onAnswer: (answer: AnswerType) => void;
  isAnswered: boolean;
}

const FantasyCard = ({ fantasy, currentAnswer, onAnswer, isAnswered }: FantasyCardProps) => {
  const profile = getUserProfile();
  
  if (!profile) {
    return <div>User profile not found</div>;
  }
  
  const gender = profile.gender;
  const partnerName = profile.partnerName;
  const colors = getCategoryColors(fantasy.category);
  
  const fantasyText = gender === "male" 
    ? fantasy.fantasy.male.replace("{partnerName}", partnerName)
    : fantasy.fantasy.female.replace("{partnerName}", partnerName);

  return (
    <Card 
      className={`w-full mb-6 ${isAnswered ? 'opacity-90' : 'opacity-100'} transition-opacity`}
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        borderColor: colors.border,
        perspective: '1000px'
      }}
    >
      <CardHeader>
        <CardTitle className="text-center text-xl" style={{ color: colors.text }}>{fantasy.category}</CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <p className="text-lg text-center mb-8">{fantasyText}</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="grid grid-cols-3 gap-2 w-full">
          <Button 
            className={`fantasy-button-interested ${
              currentAnswer === "interested" 
                ? "" 
                : "opacity-50 hover:opacity-80"
            }`}
            onClick={() => onAnswer("interested")}
          >
            Yes
          </Button>
          <Button 
            className={`fantasy-button-conditionally ${
              currentAnswer === "conditionally" 
                ? "" 
                : "opacity-50 hover:opacity-80"
            }`}
            onClick={() => onAnswer("conditionally")}
          >
            Maybe
          </Button>
          <Button 
            className={`fantasy-button-not-interested ${
              currentAnswer === "notInterested" 
                ? "" 
                : "opacity-50 hover:opacity-80"
            }`}
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
