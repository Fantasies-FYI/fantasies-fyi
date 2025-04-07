import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserProfile } from "@/data/sampleFantasies";
import { saveUserProfile } from "@/utils/storage";
import { toast } from "sonner";
import { ExtendedUserProfile } from "@/types/user";

interface OnboardingFormProps {
  onComplete: (profile: UserProfile) => void;
}

const OnboardingForm = ({ onComplete }: OnboardingFormProps) => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<ExtendedUserProfile>({
    name: "",
    gender: "male",
    ageRange: "23-28",
    partnerName: "",
    partnerGender: "female",
    completedOnboarding: false,
  });
  
  const handleNext = () => {
    if (step === 1) {
      setStep(step + 1);
      return;
    }
    
    if (step === 2) {
      setStep(step + 1);
      return;
    }
    
    if (step === 3 && (!profile.name || !profile.gender || !profile.ageRange || !profile.partnerName || !profile.partnerGender)) {
      toast.error("Please fill out all fields");
      return;
    }
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      const baseProfile: UserProfile = {
        ...profile,
        completedOnboarding: true,
      };
      saveUserProfile(baseProfile);
      onComplete(baseProfile);
    }
  };
  
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const renderStep1 = () => (
    <CardContent className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Welcome to Fantasy Shared Hearts</h3>
        <p className="text-muted-foreground">Explore your hidden pleasures</p>
      </div>
      
      <p className="mb-4">
        Fantasy Shared Hearts is an interactive questionnaire designed to help you and your partner
        explore and discover shared sexual fantasies in a safe, comfortable environment.
      </p>
      
      <div className="bg-muted p-4 rounded-lg mt-4">
        <p className="text-sm">
          <strong>Note:</strong> Fantasy Shared Hearts is intended for consenting adults only.
          All data is stored locally on your device for privacy.
        </p>
      </div>
      
      <p className="mb-4">
        Fantasies.fyi is a questionnaire designed for you to explore all of your sexual fantasies without limits.
        Simply answer a series of questions, and have your partner do the same. If your interests match, 
        they will be revealed at the end of your session. No awkward conversations necessary.
      </p>
    </CardContent>
  );
  
  const renderStep2 = () => (
    <CardContent className="space-y-4">
      <div className="text-center space-y-4">
        <h3 className="text-lg font-medium">How Fantasy Shared Hearts Works</h3>
        <p className="mb-2">
          This app helps you discover sexual fantasies that both you and your partner are interested in.
          You'll each answer questions independently, then share your results to see where your desires align.
        </p>
        
        <div className="bg-muted p-4 rounded-lg mt-4">
          <h4 className="font-medium mb-2 text-center">The Process</h4>
          <ol className="text-sm space-y-2 text-left list-decimal pl-4">
            <li>Browse through different fantasy categories</li>
            <li>Answer questions about each fantasy</li>
            <li>Generate a unique code to share with your partner</li>
            <li>When your partner completes their answers and enters your code, you'll both see your matches</li>
          </ol>
        </div>
      </div>
      
      <div className="text-center space-y-4 mt-6">
        <h3 className="text-lg font-medium">Understanding Answer Options</h3>
        <p>
          For each fantasy, you'll have three possible responses. Be honest with your answers!
        </p>
        
        <div className="bg-muted p-4 rounded-lg mt-4">
          <h4 className="font-medium mb-3 text-center">Answer Options</h4>
          <div className="text-sm space-y-3 text-left">
            <p className="mb-2">
              <span className="font-bold">Yes:</span> This sounds fun! You're enthusiastic about this fantasy.
            </p>
            <p className="mb-2">
              <span className="font-bold">Maybe:</span> If my partner is interested. You're open to it if your partner wants to try.
            </p>
            <p>
              <span className="font-bold">No:</span> I am not interested. This fantasy is not for you.
            </p>
          </div>
        </div>
        
        <p className="mt-4">
          The app will only reveal fantasies where you both showed interest 
          (both said "Yes" or one said "Yes" and the other said "Maybe").
        </p>
        
        <p className="mt-4 text-sm italic">
          Can I just select 'yes' to everything, and just see my partner's answers? You could do that, 
          but that would also make you a dick. The focus is on finding common ground rather than exposing all preferences.
        </p>
      </div>
    </CardContent>
  );
  
  const renderStep3 = () => (
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          placeholder="Enter name"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
      </div>
      
      <div className="space-y-2">
        <Label>Your Gender</Label>
        <RadioGroup
          value={profile.gender}
          onValueChange={(value) => setProfile({ ...profile, gender: value as "male" | "female" })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="age-range">Your Age Range</Label>
        <Select
          value={profile.ageRange}
          onValueChange={(value) => 
            setProfile({ 
              ...profile, 
              ageRange: value as "18-22" | "23-28" | "29-35" | "36-45" | "46-55" | "over55" 
            })
          }
        >
          <SelectTrigger id="age-range">
            <SelectValue placeholder="Choose your age range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="18-22">18-22</SelectItem>
            <SelectItem value="23-28">23-28</SelectItem>
            <SelectItem value="29-35">29-35</SelectItem>
            <SelectItem value="36-45">36-45</SelectItem>
            <SelectItem value="46-55">46-55</SelectItem>
            <SelectItem value="over55">Over 55</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2 mt-6">
        <Label htmlFor="partner-name">Partner's Name</Label>
        <Input
          id="partner-name"
          placeholder="Enter partner's name"
          value={profile.partnerName}
          onChange={(e) => setProfile({ ...profile, partnerName: e.target.value })}
        />
      </div>
      
      <div className="space-y-2">
        <Label>Partner's Gender</Label>
        <RadioGroup
          value={profile.partnerGender}
          onValueChange={(value) => setProfile({ ...profile, partnerGender: value as "male" | "female" })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="partner-male" />
            <Label htmlFor="partner-male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="partner-female" />
            <Label htmlFor="partner-female">Female</Label>
          </div>
        </RadioGroup>
      </div>
    </CardContent>
  );
  
  const renderStep4 = () => (
    <CardContent className="space-y-4">
      <div className="text-center space-y-4">
        <h3 className="text-lg font-medium">Privacy & Security</h3>
        <p className="mb-4">
          Fantasy Shared Hearts stores all your data locally on your device. No data is sent to servers.
          The shared code is encrypted to protect your privacy. Your personal information is not sold, 
          traded, or otherwise transferred to outside parties.
        </p>
        
        <h3 className="text-lg font-medium">Important Notice</h3>
        <p className="mb-4">
          Fantasy Shared Hearts is intended for consenting adults only. The app is designed 
          to facilitate communication and should not be used as a substitute for professional 
          advice or counseling. Always practice safe, consensual, and legal sexual activities.
        </p>
        
        <p className="mt-4 font-semibold">
          Ready to start exploring your hidden desires together?
        </p>
      </div>
    </CardContent>
  );
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Fantasy Shared Hearts</CardTitle>
        <CardDescription>
          Step {step} of 4: {
            step === 1 ? "Welcome & Introduction" : 
            step === 2 ? "How It Works & Answer Options" : 
            step === 3 ? "Personal Information" : 
            "Privacy & Final Notes"
          }
        </CardDescription>
      </CardHeader>
      
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={step === 1}>
          Back
        </Button>
        <Button onClick={handleNext}>
          {step < 4 ? "Next" : "Start"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OnboardingForm;
