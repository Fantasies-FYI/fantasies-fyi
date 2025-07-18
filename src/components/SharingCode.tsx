
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { generateSharingCode, getUserProfile } from "@/utils/storage";

interface SharingCodeProps {
  onClose: () => void;
}

const SharingCode = ({ onClose }: SharingCodeProps) => {
  const [code, setCode] = useState("");
  
  useEffect(() => {
    // Generate the code when component mounts
    const generatedCode = generateSharingCode();
    setCode(generatedCode);
    
    // Get user profile to include name in URL
    const profile = getUserProfile();
    const userName = profile?.name || "User";
    
    // Update the browser URL with name and code parameters
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('name', userName);
    currentUrl.searchParams.set('code', generatedCode);
    
    // Update browser URL without reloading the page
    window.history.replaceState({}, '', currentUrl.toString());
  }, []);

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        toast.success("Code copied to clipboard!");
      })
      .catch(() => {
        toast.error("Error copying code");
      });
  };

  return (
    <div className="w-full">
      <CardContent className="p-0">
        <p className="mb-4">
          This is your unique code that you can share with your partner.
        </p>
        
        {/* Share Code */}
        <div className="mb-4">
          <label className="text-sm font-medium text-muted-foreground">Share Code:</label>
          <Input
            value={code}
            readOnly
            className="font-mono text-xs mt-1"
          />
        </div>
        
        <div className="text-sm">
          <p>
            Your partner needs this code to see your shared fantasies. Copy the code and send it in a message.
          </p>
        </div>
      </CardContent>
      <div className="flex justify-center mt-6">
        <Button variant="secondary" onClick={copyCodeToClipboard}>
          Copy Code
        </Button>
      </div>
    </div>
  );
};

export default SharingCode;
