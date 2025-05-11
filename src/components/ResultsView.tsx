
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fantasy, UserAnswer, getCategoryColors } from "@/data/sampleFantasies";
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

  // Group fantasies by category
  const groupedFantasies: { [key: string]: Fantasy[] } = {};
  sharedFantasies.forEach(fantasy => {
    if (!groupedFantasies[fantasy.category]) {
      groupedFantasies[fantasy.category] = [];
    }
    groupedFantasies[fantasy.category].push(fantasy);
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Your Shared Interests
      </h2>
      
      {sharedFantasies.length === 0 ? (
        <Card className="mb-4 border-0 shadow-md">
          <CardContent className="pt-6">
            <p className="text-center">
              No shared interests found. Try answering more fantasies!
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <p className="text-center mb-6">
            You have {sharedFantasies.length} shared fantasies across {Object.keys(groupedFantasies).length} categories:
          </p>
          
          {Object.entries(groupedFantasies).map(([category, fantasies]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              
              {fantasies.map(fantasy => {
                // Use the new result text instead of gender-specific text
                const fantasyText = fantasy.fantasy.result;
                
                const colors = getCategoryColors(fantasy.category);
                
                return (
                  <Card 
                    key={fantasy.id} 
                    className="mb-4 border-0 shadow-md"
                    style={{
                      backgroundColor: colors.background,
                      color: "#ffffff",
                    }}
                  >
                    <CardHeader>
                      <CardDescription className="text-white flex justify-between items-center">
                        <span>You: {getUserAnswer(fantasy.id)}</span>
                        <span>{partnerName}: {getPartnerAnswer(fantasy.id)}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-white text-center">{fantasyText}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ResultsView;
