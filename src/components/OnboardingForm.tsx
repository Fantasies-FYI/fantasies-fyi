
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

interface OnboardingFormProps {
  onComplete: (profile: UserProfile) => void;
}

const OnboardingForm = ({ onComplete }: OnboardingFormProps) => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    gender: "male",
    ageRange: "23-28",
    partnerName: "",
    completedOnboarding: false,
  });
  
  const handleNext = () => {
    if (step === 1 && (!profile.name || !profile.gender)) {
      toast.error("Please fill out all fields");
      return;
    }
    
    if (step === 2 && (!profile.ageRange || !profile.partnerName)) {
      toast.error("Please fill out all fields");
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      const completeProfile = { ...profile, completedOnboarding: true };
      saveUserProfile(completeProfile);
      onComplete(completeProfile);
    }
  };
  
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const renderStep1 = () => (
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
        <Label>Gender</Label>
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
    </CardContent>
  );
  
  const renderStep2 = () => (
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="age-range">Age Range</Label>
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
      
      <div className="space-y-2">
        <Label htmlFor="partner-name">Partner's Name</Label>
        <Input
          id="partner-name"
          placeholder="Enter partner's name"
          value={profile.partnerName}
          onChange={(e) => setProfile({ ...profile, partnerName: e.target.value })}
        />
      </div>
    </CardContent>
  );
  
  const renderStep3 = () => (
    <CardContent className="space-y-4">
      <div className="text-center space-y-4">
        <h3 className="text-lg font-medium">How This App Works</h3>
        <p>
          You will see a series of fantasies and can choose for each whether you are
          interested, conditionally interested, or not interested.
        </p>
        <p>
          Your answers are securely and privately stored on your device.
          After answering, you can generate a code to share with your
          partner.
        </p>
        <p>
          When both of you have shared your answers, the app only shows
          fantasies where both of you have shown interest.
        </p>
        
        <div className="bg-muted p-4 rounded-lg mt-4">
          <h4 className="font-medium mb-2">Answer Options</h4>
          <p className="text-sm mb-2">
            <span className="font-bold">Yes:</span> This sounds fun!
          </p>
          <p className="text-sm mb-2">
            <span className="font-bold">Maybe:</span> If my partner is interested.
          </p>
          <p className="text-sm">
            <span className="font-bold">No:</span> I am not interested.
          </p>
        </div>
      </div>
    </CardContent>
  );
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Welcome to Fantasy Shared Hearts</CardTitle>
        <CardDescription>
          Step {step} of 3: {step === 1 ? "Personal Information" : step === 2 ? "More Details" : "Introduction"}
        </CardDescription>
      </CardHeader>
      
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={step === 1}>
          Back
        </Button>
        <Button onClick={handleNext}>
          {step < 3 ? "Next" : "Start"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OnboardingForm;
