
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
      toast.error("Bitte fülle alle Felder aus");
      return;
    }
    
    if (step === 2 && (!profile.ageRange || !profile.partnerName)) {
      toast.error("Bitte fülle alle Felder aus");
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
        <Label htmlFor="name">Dein Name</Label>
        <Input
          id="name"
          placeholder="Name eingeben"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
      </div>
      
      <div className="space-y-2">
        <Label>Geschlecht</Label>
        <RadioGroup
          value={profile.gender}
          onValueChange={(value) => setProfile({ ...profile, gender: value as "male" | "female" })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Männlich</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Weiblich</Label>
          </div>
        </RadioGroup>
      </div>
    </CardContent>
  );
  
  const renderStep2 = () => (
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="age-range">Altersbereich</Label>
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
            <SelectValue placeholder="Wähle deinen Altersbereich" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="18-22">18-22</SelectItem>
            <SelectItem value="23-28">23-28</SelectItem>
            <SelectItem value="29-35">29-35</SelectItem>
            <SelectItem value="36-45">36-45</SelectItem>
            <SelectItem value="46-55">46-55</SelectItem>
            <SelectItem value="over55">über 55</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="partner-name">Name des Partners</Label>
        <Input
          id="partner-name"
          placeholder="Name des Partners eingeben"
          value={profile.partnerName}
          onChange={(e) => setProfile({ ...profile, partnerName: e.target.value })}
        />
      </div>
    </CardContent>
  );
  
  const renderStep3 = () => (
    <CardContent className="space-y-4">
      <div className="text-center space-y-4">
        <h3 className="text-lg font-medium">Wie diese App funktioniert</h3>
        <p>
          Du wirst eine Reihe von Fantasien sehen und kannst für jede wählen, ob du
          interessiert, bedingt interessiert oder nicht interessiert bist.
        </p>
        <p>
          Deine Antworten werden sicher und privat auf deinem Gerät gespeichert.
          Nach dem Beantworten kannst du einen Code generieren, den du mit deinem
          Partner teilen kannst.
        </p>
        <p>
          Wenn ihr beide eure Antworten geteilt habt, zeigt die App nur die
          Fantasien an, bei denen ihr beide Interesse gezeigt habt.
        </p>
        
        <div className="bg-muted p-4 rounded-lg mt-4">
          <h4 className="font-medium mb-2">Wichtige Begriffe</h4>
          <p className="text-sm mb-2">
            <span className="font-bold">Interessiert:</span> Du hättest Freude daran, diese Fantasie zu erleben.
          </p>
          <p className="text-sm mb-2">
            <span className="font-bold">Bedingt interessiert:</span> Du wärst unter bestimmten Umständen daran interessiert.
          </p>
          <p className="text-sm">
            <span className="font-bold">Nicht interessiert:</span> Du möchtest diese Fantasie nicht erleben.
          </p>
        </div>
      </div>
    </CardContent>
  );
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Willkommen bei Fantasy Shared Hearts</CardTitle>
        <CardDescription>
          Schritt {step} von 3: {step === 1 ? "Persönliche Informationen" : step === 2 ? "Weitere Details" : "Einführung"}
        </CardDescription>
      </CardHeader>
      
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={step === 1}>
          Zurück
        </Button>
        <Button onClick={handleNext}>
          {step < 3 ? "Weiter" : "Starten"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OnboardingForm;
