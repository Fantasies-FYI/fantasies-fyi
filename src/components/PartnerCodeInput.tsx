
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
      toast.error("Please enter a code");
      return;
    }
    
    setIsProcessing(true);
    try {
      const partnerData = decodePartnerCode(code);
      if (partnerData) {
        toast.success(`Successfully decoded ${partnerData.profile.name}'s code`);
        onCodeProcessed(partnerData);
      } else {
        toast.error("Invalid or corrupted code");
      }
    } catch (error) {
      toast.error("Error processing code");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <p className="mb-4">
          Enter the code you received from your partner to see your shared interests.
        </p>
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter partner code here"
          className="font-mono mb-4"
        />
      </div>
      <div className="flex justify-center">
        <Button variant="secondary" onClick={processCode} disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Process Code"}
        </Button>
      </div>
    </div>
  );
};

export default PartnerCodeInput;
