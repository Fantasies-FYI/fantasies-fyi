
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { clearUserAnswers, clearUserProfile } from "@/utils/storage";
import { toast } from "sonner";
import FloatingMenu from "./FloatingMenu";

interface InfoPageProps {
  onClose: () => void;
  onReset: () => void;
}

const InfoPage = ({ onClose, onReset }: InfoPageProps) => {
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  
  const handleReset = () => {
    clearUserProfile();
    clearUserAnswers();
    setResetDialogOpen(false);
    toast.success("All answers have been reset");
    onReset();
  };

  return (
    <div className="w-full max-w-2xl mx-auto pb-20">
      <Card className="mb-6 border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">About Fantasies FYI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="italic text-lg text-center mb-4">
            Explore your hidden pleasures
          </p>
          
          <p>
            Welcome to your space to explore and share your hidden sexual fantasies. 
            By completing a simple survey, you'll discover the desires you both share 
            and find mutual fantasies.
          </p>
          
          <h3 className="text-lg font-semibold">What is Fantasies FYI?</h3>
          <p>
            Fantasies FYI is an interactive quiz application designed to help couples 
            explore and discuss their sexual preferences and boundaries in a safe, comfortable environment. 
            By answering questions about various sexual activities and fantasies, couples can gain 
            insights into each other's desires and foster open communication about intimacy.
          </p>
          
          <h3 className="text-lg font-semibold">How does it work?</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Choose a category of fantasies.</li>
            <li>Answer all questions in that category with "Yes", "Maybe", or "No".</li>
            <li>After answering all questions, generate a code to share with your partner.</li>
            <li>Your partner also answers all questions and enters your code.</li>
            <li>The app then shows you only the fantasies that you're both interested in.</li>
          </ol>
          
          <h3 className="text-lg font-semibold">What do the answer options mean?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Yes:</strong> This sounds fun!</li>
            <li><strong>Maybe:</strong> If my partner is interested.</li>
            <li><strong>No:</strong> I am not interested.</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-6 border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Privacy & Purpose</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold">Privacy and Security</h3>
          <p>
            Fantasies FYI stores all your data locally on your device. No data is sent to servers.
            The shared code is encrypted to protect your privacy. Your personal information is not sold, 
            traded, or otherwise transferred to outside parties.
          </p>
          
          <h3 className="text-lg font-semibold">Can I see all of my partner's answers?</h3>
          <p>
            The app is designed to only show fantasies where both partners have expressed interest.
            This approach ensures comfort and mutual consent in exploring shared desires.
            The focus is on finding common ground rather than exposing all preferences.
          </p>
          
          <h3 className="text-lg font-semibold">Important Notice</h3>
          <p>
            Fantasies FYI is intended for consenting adults only. The app is designed 
            to facilitate communication and should not be used as a substitute for professional 
            advice or counseling. Always practice safe, consensual, and legal sexual activities.
          </p>
        </CardContent>
      </Card>
      
      <Card className="mb-6 border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl text-red-500">Reset All Answers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This action will delete all your previous answers and return you to the onboarding screen.
            This action cannot be undone.
          </p>
          
          <div className="flex justify-center mt-4">
            <Dialog open={resetDialogOpen} onOpenChange={setResetDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive">Reset All Answers</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Reset all answers?</DialogTitle>
                  <DialogDescription>
                    This action will delete all your previous answers and return you to the onboarding screen. 
                    This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end space-x-2 mt-4">
                  <Button variant="secondary" onClick={() => setResetDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
      
      <FloatingMenu 
        showBackButton={true}
        onInfoClick={() => {}}
        onShareClick={() => {}}
        onBackClick={onClose}
      />
    </div>
  );
};

export default InfoPage;
