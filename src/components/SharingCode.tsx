
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { generateSharingCode } from "@/utils/storage";

interface SharingCodeProps {
  onClose: () => void;
}

const SharingCode = ({ onClose }: SharingCodeProps) => {
  const [code, setCode] = useState(generateSharingCode());

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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Teile deinen Code</CardTitle>
        <CardDescription>
          Dies ist dein einzigartiger Code, den du mit deinem Partner teilen kannst.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          value={code}
          readOnly
          className="font-mono text-xs"
        />
        <div className="mt-4 text-sm">
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
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onClose}>
          Zurück
        </Button>
        <Button onClick={copyToClipboard}>
          Code kopieren
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SharingCode;
