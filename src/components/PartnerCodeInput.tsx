
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
    <div className="w-full">
      <div className="mb-4">
        <p className="mb-4">
          Füge den Code ein, den du von deinem Partner erhalten hast, um eure gemeinsamen Interessen zu sehen.
        </p>
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Partner-Code hier einfügen"
          className="font-mono mb-4"
        />
      </div>
      <div className="flex justify-center">
        <Button onClick={processCode} disabled={isProcessing}>
          {isProcessing ? "Verarbeitung..." : "Code verarbeiten"}
        </Button>
      </div>
    </div>
  );
};

export default PartnerCodeInput;
