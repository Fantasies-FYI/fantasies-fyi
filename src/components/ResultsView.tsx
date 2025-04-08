
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fantasy, UserAnswer } from "@/data/sampleFantasies";
import { getUserProfile } from "@/utils/storage";
import { Badge } from "@/components/ui/badge";

interface ResultsViewProps {
  sharedFantasies: Fantasy[];
  userAnswers: UserAnswer[];
  partnerAnswers: UserAnswer[];
  partnerName: string;
}

const ResultsView = ({ 
  sharedFantasies, 
  userAnswers, 
  partnerAnswers,
  partnerName 
}: ResultsViewProps) => {
  const profile = getUserProfile();
  
  if (!profile) {
    return <div>User profile not found</div>;
  }
  
  const getUserAnswer = (fantasyId: number): string => {
    const answer = userAnswers.find(a => a.fantasyId === fantasyId)?.answer;
    if (answer === "interested") return "Interested";
    if (answer === "conditionally") return "Maybe interested";
    return "Unknown";
  };
  
  const getPartnerAnswer = (fantasyId: number): string => {
    const answer = partnerAnswers.find(a => a.fantasyId === fantasyId)?.answer;
    if (answer === "interested") return "Interested";
    if (answer === "conditionally") return "Maybe interested";
    return "Unknown";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Your Shared Interests
      </h2>
      
      {sharedFantasies.length === 0 ? (
        <Card className="mb-4">
          <CardContent className="pt-6">
            <p className="text-center">
              No shared interests found. Try answering more fantasies!
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <p className="text-center mb-6">
            You have selected these {sharedFantasies.length} fantasies in common:
          </p>
          
          {sharedFantasies.map(fantasy => {
            const gender = profile.gender;
            const fantasyText = gender === "male" 
              ? fantasy.fantasy.male.replace("{partnerName}", partnerName)
              : fantasy.fantasy.female.replace("{partnerName}", partnerName);
              
            return (
              <Card key={fantasy.id} className="mb-4">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-lg">{fantasy.category}</span>
                    <Badge>{fantasy.id}</Badge>
                  </CardTitle>
                  <CardDescription>
                    <div className="flex justify-between">
                      <span>You: {getUserAnswer(fantasy.id)}</span>
                      <span>{partnerName}: {getPartnerAnswer(fantasy.id)}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{fantasyText}</p>
                </CardContent>
              </Card>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ResultsView;
