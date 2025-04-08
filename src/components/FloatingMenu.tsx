
import React from "react";
import { Button } from "@/components/ui/button";
import { Info, Share2, ArrowLeft } from "lucide-react";

interface FloatingMenuProps {
  showBackButton?: boolean;
  onInfoClick: () => void;
  onShareClick: () => void;
  onBackClick?: () => void;
  inCategoryView?: boolean;
}

const FloatingMenu = ({
  showBackButton = false,
  onInfoClick,
  onShareClick,
  onBackClick,
  inCategoryView = false,
}: FloatingMenuProps) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 z-50">
      <div className="bg-gray-900/80 backdrop-blur-md rounded-full p-2 flex justify-between items-center shadow-xl max-w-md mx-auto">
        {showBackButton ? (
          <div className="flex justify-between w-full">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBackClick}
              className="text-white hover:text-white hover:bg-gray-800/60 rounded-full w-full"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              <span>Back to Overview</span>
            </Button>
            <div className="flex">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onInfoClick}
                className="text-white hover:text-white hover:bg-gray-800/60 rounded-full"
                title="Help"
              >
                <Info className="h-5 w-5 mr-1" />
                <span>Help</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onShareClick}
              className="text-white hover:text-white hover:bg-gray-800/60 rounded-full flex-1 mr-1"
              title="Share with Partner"
            >
              <Share2 className="h-5 w-5 mr-1" />
              <span>Share with Partner</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onInfoClick}
              className="text-white hover:text-white hover:bg-gray-800/60 rounded-full flex-1 ml-1"
              title="Help"
            >
              <Info className="h-5 w-5 mr-1" />
              <span>Help</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingMenu;
