
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SharingCode from "@/components/SharingCode";
import PartnerCodeInput from "@/components/PartnerCodeInput";
import { PartnerData } from "@/utils/storage";
import { toast } from "sonner";

interface SharingPageProps {
  onClose: () => void;
  onPartnerCodeProcessed: (partnerData: PartnerData) => void;
  allQuestionsAnswered: boolean;
}

const SharingPage = ({ onClose, onPartnerCodeProcessed, allQuestionsAnswered }: SharingPageProps) => {
  const [activeTab, setActiveTab] = useState<string>("generate");
  
  const handleTabChange = (value: string) => {
    if (!allQuestionsAnswered) {
      toast.error("Du musst zuerst alle Fragen beantworten");
      return;
    }
    setActiveTab(value);
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="rounded-3xl border-border/50 glass-card">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl">Teilen & Vergleichen</CardTitle>
        </CardHeader>
        
        <div className="px-6">
          {!allQuestionsAnswered ? (
            <CardContent className="text-center p-0 pb-6">
              <div className="glass-card p-6 rounded-xl mb-4">
                <p className="text-lg text-foreground font-medium">Beantworte zuerst alle Fragen</p>
                <p className="text-muted-foreground mt-2">
                  Du musst alle Fragen in allen Kategorien beantworten, bevor du Codes teilen oder einsehen kannst.
                </p>
              </div>
            </CardContent>
          ) : (
            <>
              <Tabs defaultValue="generate" value={activeTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="grid grid-cols-2 mb-6 bg-secondary/30">
                  <TabsTrigger value="generate" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Code generieren
                  </TabsTrigger>
                  <TabsTrigger value="enter" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Code eingeben
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="generate">
                  <SharingCode onClose={onClose} />
                </TabsContent>
                <TabsContent value="enter">
                  <PartnerCodeInput onCodeProcessed={onPartnerCodeProcessed} onCancel={onClose} />
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default SharingPage;
