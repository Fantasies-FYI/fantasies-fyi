
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { generateSharingCode } from "@/utils/storage";

interface SharingCodeProps {
  onClose: () => void;
}

const SharingCode = ({ onClose }: SharingCodeProps) => {
  const [code, setCode] = useState("");
  
  useEffect(() => {
    // Generate the code when component mounts
    setCode(generateSharingCode());
  }, []);

  const copyToClipboard = () => {
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
        <Input
          value={code}
          readOnly
          className="font-mono text-xs mb-4"
        />
        <div className="text-sm">
          <p>
            Your partner needs this code to see your shared fantasies. 
            Ways to share:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Copy the code and send it in a message</li>
            <li>Show this code directly to your partner</li>
          </ul>
        </div>
      </CardContent>
      <div className="flex justify-center mt-6">
        <Button onClick={copyToClipboard}>
          Copy Code
        </Button>
      </div>
    </div>
  );
};

export default SharingCode;
