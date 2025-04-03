
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { clearUserProfile, clearUserAnswers } from "@/utils/storage";

interface NavigationProps {
  onHome: () => void;
  onShowResults: () => void;
  onGenerateCode: () => void;
  onEnterPartnerCode: () => void;
}

const Navigation = ({ onHome, onShowResults, onGenerateCode, onEnterPartnerCode }: NavigationProps) => {
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  
  const handleReset = () => {
    clearUserProfile();
    clearUserAnswers();
    setResetDialogOpen(false);
    window.location.reload(); // Force reload after reset
  };
  
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="flex justify-between items-center mb-4">
        <Button variant="ghost" onClick={onHome}>
          Fantasy Shared Hearts
        </Button>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={onShowResults}>
            Ergebnisse
          </Button>
          
          <Dialog open={resetDialogOpen} onOpenChange={setResetDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive" size="sm">
                Zurücksetzen
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Alles zurücksetzen?</DialogTitle>
                <DialogDescription>
                  Diese Aktion wird dein Profil und alle Antworten löschen. Diese Aktion kann nicht rückgängig gemacht werden.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" onClick={() => setResetDialogOpen(false)}>
                  Abbrechen
                </Button>
                <Button variant="destructive" onClick={handleReset}>
                  Zurücksetzen
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4 mb-6">
        <Button variant="secondary" onClick={onGenerateCode}>
          Code generieren
        </Button>
        <Button variant="secondary" onClick={onEnterPartnerCode}>
          Partner-Code eingeben
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
