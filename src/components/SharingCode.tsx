
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { generateSharingCode } from "@/utils/storage";

interface SharingCodeProps {
  onClose: () => void;
}

const SharingCode = ({ onClose }: SharingCodeProps) => {
  const [code, setCode] = useState("");
  
  useEffect(() => {
    // Generate the code when component mounts
    setCode(generateSharingCode());
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
