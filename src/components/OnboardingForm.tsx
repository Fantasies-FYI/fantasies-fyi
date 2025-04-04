
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
import { ArrowRight, ChevronLeft } from "lucide-react";

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
    <CardContent className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="name" className="text-foreground/80">Dein Name</Label>
        <Input
          id="name"
          placeholder="Name eingeben"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="h-12 bg-secondary border-border/30 focus:border-primary"
        />
      </div>
      
      <div className="space-y-3">
        <Label className="text-foreground/80">Geschlecht</Label>
        <RadioGroup
          value={profile.gender}
          onValueChange={(value) => setProfile({ ...profile, gender: value as "male" | "female" })}
          className="flex gap-4"
        >
          <div className="flex items-center space-x-2 glass-card p-4 rounded-lg flex-1 cursor-pointer">
            <RadioGroupItem value="male" id="male" className="text-primary" />
            <Label htmlFor="male" className="cursor-pointer">Männlich</Label>
          </div>
          <div className="flex items-center space-x-2 glass-card p-4 rounded-lg flex-1 cursor-pointer">
            <RadioGroupItem value="female" id="female" className="text-primary" />
            <Label htmlFor="female" className="cursor-pointer">Weiblich</Label>
          </div>
        </RadioGroup>
      </div>
    </CardContent>
  );
  
  const renderStep2 = () => (
    <CardContent className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="age-range" className="text-foreground/80">Altersbereich</Label>
        <Select
          value={profile.ageRange}
          onValueChange={(value) => 
            setProfile({ 
              ...profile, 
              ageRange: value as "18-22" | "23-28" | "29-35" | "36-45" | "46-55" | "over55" 
            })
          }
        >
          <SelectTrigger id="age-range" className="h-12 bg-secondary border-border/30">
            <SelectValue placeholder="Wähle deinen Altersbereich" />
          </SelectTrigger>
          <SelectContent className="bg-background border-border">
            <SelectItem value="18-22">18-22</SelectItem>
            <SelectItem value="23-28">23-28</SelectItem>
            <SelectItem value="29-35">29-35</SelectItem>
            <SelectItem value="36-45">36-45</SelectItem>
            <SelectItem value="46-55">46-55</SelectItem>
            <SelectItem value="over55">über 55</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="partner-name" className="text-foreground/80">Name des Partners</Label>
        <Input
          id="partner-name"
          placeholder="Name des Partners eingeben"
          value={profile.partnerName}
          onChange={(e) => setProfile({ ...profile, partnerName: e.target.value })}
          className="h-12 bg-secondary border-border/30 focus:border-primary"
        />
      </div>
    </CardContent>
  );
  
  const renderStep3 = () => (
    <CardContent className="space-y-6">
      <div className="text-center space-y-4">
        <h3 className="text-xl font-medium text-foreground">Wie diese App funktioniert</h3>
        <p className="text-muted-foreground">
          Du wirst eine Reihe von Fantasien sehen und kannst für jede wählen, ob du
          interessiert, bedingt interessiert oder nicht interessiert bist.
        </p>
        <p className="text-muted-foreground">
          Deine Antworten werden sicher und privat auf deinem Gerät gespeichert.
          Nach dem Beantworten kannst du einen Code generieren, den du mit deinem
          Partner teilen kannst.
        </p>
        <p className="text-muted-foreground">
          Wenn ihr beide eure Antworten geteilt habt, zeigt die App nur die
          Fantasien an, bei denen ihr beide Interesse gezeigt habt.
        </p>
        
        <div className="glass-card p-6 rounded-xl mt-6">
          <h4 className="font-medium mb-4 text-foreground">Wichtige Begriffe</h4>
          <div className="space-y-4 text-left">
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[hsl(var(--fantasy-interested))]"></span>
              <span className="font-bold text-foreground">Interessiert:</span>
              <span className="text-muted-foreground">Du hättest Freude daran, diese Fantasie zu erleben.</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[hsl(var(--fantasy-conditionally))]"></span>
              <span className="font-bold text-foreground">Bedingt interessiert:</span>
              <span className="text-muted-foreground">Du wärst unter bestimmten Umständen daran interessiert.</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[hsl(var(--fantasy-notInterested))]"></span>
              <span className="font-bold text-foreground">Nicht interessiert:</span>
              <span className="text-muted-foreground">Du möchtest diese Fantasie nicht erleben.</span>
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  );
  
  return (
    <Card className="w-full max-w-md mx-auto rounded-3xl border-border/50 glass-card">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl">Fantasy Shared Hearts</CardTitle>
        <CardDescription className="text-muted-foreground">
          Schritt {step} von 3: {step === 1 ? "Persönliche Informationen" : step === 2 ? "Weitere Details" : "Einführung"}
        </CardDescription>
      </CardHeader>
      
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      
      <CardFooter className="flex justify-between pt-6">
        <Button 
          variant="outline" 
          onClick={handlePrevious} 
          disabled={step === 1}
          className="glass-card px-4 py-2 flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" /> Zurück
        </Button>
        <Button 
          onClick={handleNext}
          className="glass-card px-6 py-5 flex items-center gap-2"
        >
          {step < 3 ? "Weiter" : "Starten"} 
          <ArrowRight className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OnboardingForm;
