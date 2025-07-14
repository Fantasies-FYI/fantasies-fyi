
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SharingCode from "@/components/SharingCode";
import PartnerCodeInput from "@/components/PartnerCodeInput";
import { PartnerData, getUserAnswers } from "@/utils/storage";
import { toast } from "sonner";
import sampleFantasies from "@/data/sampleFantasies";
import FloatingMenu from "@/components/FloatingMenu";

interface SharingPageProps {
  onClose: () => void;
  onPartnerCodeProcessed: (data: PartnerData) => void;
  setResultsViewed: (viewed: boolean) => void;
  resultsViewed: boolean;
}

const SharingPage = ({ 
  onClose, 
  onPartnerCodeProcessed, 
  setResultsViewed, 
  resultsViewed 
}: SharingPageProps) => {
  const [activeTab, setActiveTab] = useState<"generate" | "enter">("generate");
  const [hasConfirmed, setHasConfirmed] = useState<boolean>(resultsViewed);
  const answers = getUserAnswers();
  const allQuestionsAnswered = answers.length === sampleFantasies.length;

  const handleConfirm = () => {
    setHasConfirmed(true);
    setResultsViewed(true);
    toast.success("Your answers have been locked. You can no longer change them.");
  };

  // If not all questions are answered, display a message and return button
  if (!allQuestionsAnswered) {
    return (
      <div className="w-full max-w-md mx-auto">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-center">Share Your Fantasies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <p className="mb-4">You need to answer all questions before you can share or view results.</p>
              <Button variant="secondary" onClick={onClose}>Back to Overview</Button>
            </div>
          </CardContent>
        </Card>
        <FloatingMenu 
          showBackButton={true}
          onInfoClick={() => {}}
          onShareClick={() => {}}
          onBackClick={onClose}
        />
      </div>
    );
  }

  // Confirmation screen before showing the sharing options
  if (!hasConfirmed) {
    return (
      <div className="w-full max-w-md mx-auto">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-center">Share Your Fantasies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <p className="mb-4">Important: After sharing, you can no longer change your answers. This ensures that your results remain consistent with your partner.</p>
              <div className="flex justify-center space-x-3">
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
                <Button variant="secondary" onClick={handleConfirm}>Confirm & Continue</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <FloatingMenu 
          showBackButton={true}
          onInfoClick={() => {}}
          onShareClick={() => {}}
          onBackClick={onClose}
        />
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-md mx-auto pb-16">
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Share Your Fantasies</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "generate" | "enter")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="generate">Generate Code</TabsTrigger>
              <TabsTrigger value="enter">Enter Partner Code</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generate">
              <SharingCode onClose={() => {}} />
            </TabsContent>
            
            <TabsContent value="enter">
              <PartnerCodeInput 
                onCodeProcessed={onPartnerCodeProcessed}
                onCancel={() => {}}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <FloatingMenu 
        showBackButton={true}
        onInfoClick={() => {}}
        onShareClick={() => {}}
        onBackClick={onClose}
      />
    </div>
  );
};

export default SharingPage;
