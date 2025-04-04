
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { generateSharingCode } from "@/utils/storage";
import { Copy } from "lucide-react";

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
        <p className="mb-6 text-muted-foreground">
          Dies ist dein einzigartiger Code, den du mit deinem Partner teilen kannst.
        </p>
        <div className="glass-card p-4 mb-6 font-mono text-center">
          <p className="text-lg font-bold tracking-wider">{code}</p>
        </div>
        <div className="text-sm space-y-4">
          <p className="text-muted-foreground">
            Dein Partner benötigt diesen Code, um eure gemeinsamen Fantasien 
            zu sehen. Wie kannst du diesen teilen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Kopiere den Code und sende ihn per Nachricht</li>
            <li>Zeige diesen Code deinem Partner direkt</li>
          </ul>
        </div>
      </CardContent>
      <div className="flex justify-center mt-8">
        <Button onClick={copyToClipboard} className="glass-card px-6 py-5 flex gap-2">
          <Copy className="w-4 h-4" />
          <span>Code kopieren</span>
        </Button>
      </div>
    </div>
  );
};

export default SharingCode;
