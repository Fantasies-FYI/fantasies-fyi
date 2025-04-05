
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
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBackClick}
            className="text-white hover:bg-gray-800/60 rounded-full"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span>Zurück zur Übersicht</span>
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size={inCategoryView ? "icon" : "sm"} 
              onClick={onInfoClick}
              className="text-white hover:bg-gray-800/60 rounded-full"
              title="Information"
            >
              <Info className="h-5 w-5" />
              {!inCategoryView && <span className="ml-1">Help</span>}
            </Button>
            <Button 
              variant="ghost" 
              size={inCategoryView ? "icon" : "sm"} 
              onClick={onShareClick}
              className="text-white hover:bg-gray-800/60 rounded-full"
              title="Teilen"
            >
              <Share2 className="h-5 w-5" />
              {!inCategoryView && <span className="ml-1">Share</span>}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingMenu;
