
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fantasy, AnswerType } from "@/data/sampleFantasies";
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
    return <div>Benutzerprofil nicht gefunden</div>;
  }
  
  const gender = profile.gender;
  const partnerName = profile.partnerName;
  
  const fantasyText = gender === "male" 
    ? fantasy.fantasy.male.replace("{partnerName}", partnerName)
    : fantasy.fantasy.female.replace("{partnerName}", partnerName);

  return (
    <Card className={`fantasy-card w-full mb-6 ${isAnswered ? 'opacity-70' : 'opacity-100'} transition-opacity`}>
      <CardHeader>
        <CardTitle className="text-center text-xl text-fantasy-primary">{fantasy.category}</CardTitle>
        <CardDescription className="text-center">Fantasie {fantasy.id}</CardDescription>
      </CardHeader>
      <CardContent className="py-6">
        <p className="text-lg text-center mb-8">{fantasyText}</p>

        <div className="flex justify-center">
          <div className={`w-3 h-3 rounded-full mx-1 ${currentAnswer === "interested" ? "bg-fantasy-interested" : "bg-gray-200"}`}></div>
          <div className={`w-3 h-3 rounded-full mx-1 ${currentAnswer === "conditionally" ? "bg-fantasy-conditionally" : "bg-gray-200"}`}></div>
          <div className={`w-3 h-3 rounded-full mx-1 ${currentAnswer === "notInterested" ? "bg-fantasy-notInterested" : "bg-gray-200"}`}></div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="grid grid-cols-3 gap-2 w-full">
          <Button 
            className={`fantasy-button-interested ${currentAnswer === "interested" ? "ring-2 ring-offset-2 ring-fantasy-interested" : ""}`}
            onClick={() => onAnswer("interested")}
          >
            Interessiert
          </Button>
          <Button 
            className={`fantasy-button-conditionally ${currentAnswer === "conditionally" ? "ring-2 ring-offset-2 ring-fantasy-conditionally" : ""}`}
            onClick={() => onAnswer("conditionally")}
          >
            Bedingt
          </Button>
          <Button 
            className={`fantasy-button-not-interested ${currentAnswer === "notInterested" ? "ring-2 ring-offset-2 ring-fantasy-notInterested" : ""}`}
            onClick={() => onAnswer("notInterested")}
          >
            Kein Interesse
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FantasyCard;
