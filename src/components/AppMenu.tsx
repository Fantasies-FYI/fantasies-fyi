
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Info, Share2 } from "lucide-react";

interface AppMenuProps {
  currentView: string;
  onCategoryView: () => void;
  onInfoView: () => void;
  onSharingView: () => void;
  title?: string;
}

const AppMenu = ({ currentView, onCategoryView, onInfoView, onSharingView, title }: AppMenuProps) => {
  if (currentView === "categories") {
    return (
      <div className="w-full max-w-4xl mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-xl font-bold text-foreground">Fantasy Shared Hearts</h1>
        <div className="flex space-x-3">
          <Button 
            size="icon" 
            onClick={onInfoView}
            title="Information"
            className="menu-button"
          >
            <Info className="h-5 w-5" />
          </Button>
          <Button 
            size="icon"
            onClick={onSharingView}
            title="Teilen"
            className="menu-button"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-4xl mx-auto mb-8 flex justify-between items-center">
      <Button 
        className="menu-button flex items-center gap-2" 
        onClick={onCategoryView}
      >
        <ChevronLeft className="h-5 w-5" />
        <span>Zurück</span>
      </Button>
      {title && (
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      )}
      <div className="w-24"></div>
    </div>
  );
};

export default AppMenu;
