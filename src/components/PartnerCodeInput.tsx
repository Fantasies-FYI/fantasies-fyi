
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { decodePartnerCode, PartnerData } from "@/utils/storage";

interface PartnerCodeInputProps {
  onCodeProcessed: (partnerData: PartnerData) => void;
  onCancel: () => void;
}

const PartnerCodeInput = ({ onCodeProcessed, onCancel }: PartnerCodeInputProps) => {
  const [code, setCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const processCode = () => {
    if (!code.trim()) {
      toast.error("Bitte gib einen Code ein");
      return;
    }

    setIsProcessing(true);
    try {
      const partnerData = decodePartnerCode(code);
      if (partnerData) {
        toast.success(`Code von ${partnerData.profile.name} erfolgreich entschlüsselt`);
        onCodeProcessed(partnerData);
      } else {
        toast.error("Ungültiger oder beschädigter Code");
      }
    } catch (error) {
      toast.error("Fehler bei der Verarbeitung des Codes");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Partner-Code eingeben</CardTitle>
        <CardDescription>
          Füge den Code ein, den du von deinem Partner erhalten hast, um eure gemeinsamen Interessen zu sehen.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Partner-Code hier einfügen"
          className="font-mono"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onCancel}>
          Abbrechen
        </Button>
        <Button onClick={processCode} disabled={isProcessing}>
          {isProcessing ? "Verarbeitung..." : "Code verarbeiten"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PartnerCodeInput;
