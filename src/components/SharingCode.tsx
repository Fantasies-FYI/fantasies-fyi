
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
  const [shareUrl, setShareUrl] = useState("");
  
  useEffect(() => {
    // Generate the code when component mounts
    const generatedCode = generateSharingCode();
    setCode(generatedCode);
    
    // Get user profile to include name in URL
    const profile = getUserProfile();
    const userName = profile?.name || "User";
    
    // Create shareable URL with name parameter
    const baseUrl = window.location.origin;
    const urlWithParams = `${baseUrl}?name=${encodeURIComponent(userName)}&code=${encodeURIComponent(generatedCode)}`;
    setShareUrl(urlWithParams);
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

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        toast.success("Share URL copied to clipboard!");
      })
      .catch(() => {
        toast.error("Error copying URL");
      });
  };

  return (
    <div className="w-full">
      <CardContent className="p-0">
        <p className="mb-4">
          This is your unique code that you can share with your partner.
        </p>
        
        {/* User Name Display */}
        <div className="mb-4">
          <label className="text-sm font-medium text-muted-foreground">Your Name:</label>
          <p className="text-lg font-semibold">{getUserProfile()?.name || "User"}</p>
        </div>
        
        {/* Share Code */}
        <div className="mb-4">
          <label className="text-sm font-medium text-muted-foreground">Share Code:</label>
          <Input
            value={code}
            readOnly
            className="font-mono text-xs mt-1"
          />
        </div>
        
        {/* Share URL */}
        <div className="mb-4">
          <label className="text-sm font-medium text-muted-foreground">Share URL:</label>
          <Input
            value={shareUrl}
            readOnly
            className="font-mono text-xs mt-1"
          />
        </div>
        
        <div className="text-sm">
          <p>
            Your partner needs this code to see your shared fantasies. 
            Ways to share:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Copy the code and send it in a message</li>
            <li>Copy the full URL with your name included</li>
            <li>Show this code directly to your partner</li>
          </ul>
        </div>
      </CardContent>
      <div className="flex justify-center space-x-3 mt-6">
        <Button variant="secondary" onClick={copyCodeToClipboard}>
          Copy Code
        </Button>
        <Button variant="secondary" onClick={copyUrlToClipboard}>
          Copy URL
        </Button>
      </div>
    </div>
  );
};

export default SharingCode;
