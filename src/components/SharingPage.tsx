
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SharingCode from "@/components/SharingCode";
import PartnerCodeInput from "@/components/PartnerCodeInput";
import { PartnerData, getUserAnswers } from "@/utils/storage";
import { toast } from "sonner";
import sampleFantasies from "@/data/sampleFantasies";

interface SharingPageProps {
  onClose: () => void;
  onPartnerCodeProcessed: (data: PartnerData) => void;
}

const SharingPage = ({ onClose, onPartnerCodeProcessed }: SharingPageProps) => {
  const [activeTab, setActiveTab] = useState<"generate" | "enter">("generate");
  const answers = getUserAnswers();
  const allQuestionsAnswered = answers.length === sampleFantasies.length;

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
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-md mx-auto">
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
          
          <div className="mt-6 text-center">
            <Button variant="outline" onClick={onClose}>
              Zurück zur Übersicht
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SharingPage;
