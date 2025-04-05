
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { clearUserProfile, clearUserAnswers } from "@/utils/storage";
import { useState } from "react";

interface NavigationProps {
  onResetConfirmed: () => void;
}

const Navigation = ({ onResetConfirmed }: NavigationProps) => {
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  
  const handleReset = () => {
    clearUserProfile();
    clearUserAnswers();
    setResetDialogOpen(false);
    onResetConfirmed();
  };
  
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="flex justify-end">
        <Dialog open={resetDialogOpen} onOpenChange={setResetDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive" size="sm">
              Reset
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reset Everything?</DialogTitle>
              <DialogDescription>
                This action will delete your profile and all answers. This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setResetDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navigation;
