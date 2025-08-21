import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import sampleFantasies from "@/data/sampleFantasies";
import { getUserProfile, getUserAnswers } from "@/utils/storage";
import { ExtendedUserProfile } from "@/types/user";

const Debug = () => {
  const profile = getUserProfile() as ExtendedUserProfile;
  const userAnswers = getUserAnswers();
  
  // Get partner answers from localStorage if available
  const partnerDataString = localStorage.getItem("partnerData");
  const partnerData = partnerDataString ? JSON.parse(partnerDataString) : null;
  const partnerAnswers = partnerData?.answers || [];

  const getUserAnswer = (fantasyId: number): string => {
    const answer = userAnswers.find(a => a.fantasyId === fantasyId)?.answer;
    switch (answer) {
      case "interested": return "Interested";
      case "conditionally": return "Maybe";
      case "notInterested": return "Not Interested";
      default: return "No Answer";
    }
  };

  const getPartnerAnswer = (fantasyId: number): string => {
    if (!partnerAnswers.length) return "No Partner Data";
    const answer = partnerAnswers.find(a => a.fantasyId === fantasyId)?.answer;
    switch (answer) {
      case "interested": return "Interested";
      case "conditionally": return "Maybe";
      case "notInterested": return "Not Interested";
      default: return "No Answer";
    }
  };

  const getAnswerBadgeVariant = (answer: string) => {
    switch (answer) {
      case "Interested": return "default";
      case "Maybe": return "secondary";
      case "Not Interested": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Debug</h1>
        
        {profile && (
          <Card className="mb-6 border-0">
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p><strong>Name:</strong> {profile.name}</p>
                  <p><strong>Gender:</strong> {profile.gender}</p>
                  <p><strong>Age Range:</strong> {profile.ageRange}</p>
                </div>
                <div>
                  <p><strong>Partner Name:</strong> {profile.partnerName}</p>
                  {profile.partnerGender && (
                    <p><strong>Partner Gender:</strong> {profile.partnerGender}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {sampleFantasies.length} total questions
            {partnerAnswers.length > 0 && ` | Partner has ${partnerAnswers.length} answers`}
          </p>
        </div>

        <div className="space-y-4">
          {sampleFantasies.map((fantasy) => {
            const userAnswer = getUserAnswer(fantasy.id);
            const partnerAnswer = getPartnerAnswer(fantasy.id);
            
            return (
              <Card key={fantasy.id} className="border-0">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg">Question #{fantasy.id}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Category: {fantasy.category}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Question Text */}
                    <div>
                      <p className="font-medium mb-2">Question:</p>
                      <p className="text-sm">
                        {profile?.gender === "male" ? fantasy.fantasy.male : fantasy.fantasy.female}
                      </p>
                    </div>
                    
                    {/* Answers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium mb-2">Your Answer:</p>
                        <Badge variant={getAnswerBadgeVariant(userAnswer)}>
                          {userAnswer}
                        </Badge>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Partner Answer:</p>
                        <Badge variant={getAnswerBadgeVariant(partnerAnswer)}>
                          {partnerAnswer}
                        </Badge>
                      </div>
                    </div>

                    {/* Result Text */}
                    {fantasy.fantasy.result && (
                      <div className="pt-2">
                        <p className="font-medium mb-2">Result Text:</p>
                        <p className="text-sm text-muted-foreground">
                          {fantasy.fantasy.result}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Debug;