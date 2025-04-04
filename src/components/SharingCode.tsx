
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { generateSharingCode, getUserAnswers } from "@/utils/storage";

interface SharingCodeProps {
  onClose: () => void;
}

const SharingCode = ({ onClose }: SharingCodeProps) => {
  const [code, setCode] = useState("");
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  
  useEffect(() => {
    const answers = getUserAnswers();
    // Check if user has answered enough questions to generate a code
    const hasEnoughAnswers = answers.length > 0;
    setAllQuestionsAnswered(hasEnoughAnswers);
    
    if (hasEnoughAnswers) {
      setCode(generateSharingCode());
    }
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        toast.success("Code in die Zwischenablage kopiert!");
      })
      .catch(() => {
        toast.error("Fehler beim Kopieren des Codes");
      });
  };

  if (!allQuestionsAnswered) {
    return (
      <div className="text-center py-6">
        <p className="mb-4">Du musst zuerst einige Fragen beantworten, bevor du einen Code generieren kannst.</p>
        <Button onClick={onClose}>Zurück</Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <CardContent className="p-0">
        <p className="mb-4">
          Dies ist dein einzigartiger Code, den du mit deinem Partner teilen kannst.
        </p>
        <Input
          value={code}
          readOnly
          className="font-mono text-xs mb-4"
        />
        <div className="text-sm">
          <p>
            Dein Partner benötigt diesen Code, um eure gemeinsamen Fantasien 
            zu sehen. Wie kannst du diesen teilen:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Kopiere den Code und sende ihn per Nachricht</li>
            <li>Zeige diesen Code deinem Partner direkt</li>
          </ul>
        </div>
      </CardContent>
      <div className="flex justify-center mt-6">
        <Button onClick={copyToClipboard}>
          Code kopieren
        </Button>
      </div>
    </div>
  );
};

export default SharingCode;
