
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
    toast.success("Deine Antworten wurden gesperrt. Du kannst sie jetzt nicht mehr ändern.");
  };

  // If not all questions are answered, display a message and return button
  if (!allQuestionsAnswered) {
    return (
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Teile deine Fantasien</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <p className="mb-4">Du musst zuerst alle Fragen beantworten, bevor du Ergebnisse teilen oder ansehen kannst.</p>
              <Button onClick={onClose}>Zurück zur Übersicht</Button>
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
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Teile deine Fantasien</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <p className="mb-4">Wichtig: Nach dem Teilen kannst du deine Antworten nicht mehr ändern. Dies stellt sicher, dass deine Ergebnisse mit deinem Partner konsistent bleiben.</p>
              <div className="flex justify-center space-x-3">
                <Button variant="outline" onClick={onClose}>Abbrechen</Button>
                <Button onClick={handleConfirm}>Bestätigen & Fortfahren</Button>
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
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Teile deine Fantasien</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "generate" | "enter")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="generate">Code generieren</TabsTrigger>
              <TabsTrigger value="enter">Partner-Code eingeben</TabsTrigger>
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
