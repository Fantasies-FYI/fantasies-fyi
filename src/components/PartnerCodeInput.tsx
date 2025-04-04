
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { decodePartnerCode, PartnerData } from "@/utils/storage";
import { ArrowRight } from "lucide-react";

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
      <div className="mb-6">
        <p className="mb-6 text-muted-foreground">
          Füge den Code ein, den du von deinem Partner erhalten hast, um eure gemeinsamen Interessen zu sehen.
        </p>
        <div className="glass-card p-4 mb-4">
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Partner-Code hier einfügen"
            className="font-mono bg-background/20 border-border/30 focus:border-primary h-12"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button 
          onClick={processCode} 
          disabled={isProcessing} 
          className="glass-card px-6 py-5 flex gap-2 items-center"
        >
          {isProcessing ? "Verarbeitung..." : "Code verarbeiten"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default PartnerCodeInput;
