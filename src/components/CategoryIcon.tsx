import React from "react";
import { FantasyCategory } from "@/data/sampleFantasies";

interface CategoryIconProps {
  category: FantasyCategory;
  className?: string;
}

const CategoryIcon = ({ category, className = "w-10 h-10" }: CategoryIconProps) => {
  const getIcon = () => {
    switch (category) {
      case "The Basics":
        return (
          <img 
            src="/lovable-uploads/96ac3d73-a025-46da-aa63-32b6d3556534.png" 
            alt="The Basics icon" 
            className={className}
          />
        );
      
      case "Sensual & Intimate":
        return (
          <img 
            src="/lovable-uploads/96a181b5-5afb-4454-9841-bb3a25f43c96.png" 
            alt="Sensual & Intimate icon" 
            className={className}
          />
        );
      
      case "Toys":
        return (
          <img 
            src="/lovable-uploads/f47342a7-ebde-4544-817e-3840acded6fa.png" 
            alt="Toys icon" 
            className={className}
          />
        );
      
      case "B.D.S.M":
        return (
          <img 
            src="/lovable-uploads/fc011aec-f428-4f6d-8868-7e0c04b21a2f.png" 
            alt="B.D.S.M icon" 
            className={className}
          />
        );
      
      case "Anal":
        return (
          <img 
            src="/lovable-uploads/b74b6206-b41e-417f-840e-a677c238f01b.png" 
            alt="Anal icon" 
            className={className}
          />
        );
      
      case "Public":
        return (
          <img 
            src="/lovable-uploads/e5c48826-cf76-4c57-b422-41be4ee9b3ad.png" 
            alt="Public icon" 
            className={className}
          />
        );
      
      case "Group":
        return (
          <img 
            src="/lovable-uploads/b309b83e-b330-4939-adb7-4802dc643675.png" 
            alt="Group icon" 
            className={className}
          />
        );
      
      case "Other Fetishes":
        return (
          <img 
            src="/lovable-uploads/a67ab253-e7d6-4354-a66f-6933304d7ea8.png" 
            alt="Other Fetishes icon" 
            className={className}
          />
        );
      
      case "Romantic Fantasies":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        );
      
      case "Role Play":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      
      case "Locations":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        );
      
      case "Positions":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M12 2v20"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        );
      
      case "Accessories":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8"/>
            <path d="M12 8v8"/>
          </svg>
        );
      
      case "Sensory Play":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        );
      
      case "Outdoor Adventures":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M3 20h18L12 4z"/>
          </svg>
        );
      
      case "Spontaneous Encounters":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        );
      
      case "Power Dynamics":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M6 2l3 6 5-4-3 10h4l-4 6-3-6-5 4 3-10H2l4-6z"/>
          </svg>
        );
      
      case "Erotic Massage":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M9 12l2 2 4-4"/>
            <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
            <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
            <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
            <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
          </svg>
        );
      
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <path d="M12 17h.01"/>
          </svg>
        );
    }
  };

  return getIcon();
};

export default CategoryIcon;