
import React from "react";

interface IllustrationProps {
  className?: string;
}

export const WelcomeIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M40,120 C40,80 60,60 100,60 C140,60 160,80 160,120"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M60,140 C90,120 110,120 140,140"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="100" cy="80" r="8" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="70" cy="100" r="4" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="130" cy="100" r="4" stroke="white" strokeWidth="1.5" fill="none" />
    <path
      d="M85,95 C90,100 110,100 115,95"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const HowItWorksIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M40,100 C40,60 100,40 160,100 C100,160 40,140 40,100 Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <line x1="40" y1="100" x2="160" y2="100" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
    <line x1="100" y1="40" x2="100" y2="160" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
    <circle cx="100" cy="100" r="10" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2 2" />
    <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="1 1" />
  </svg>
);

export const PersonalInfoIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="100" cy="70" r="20" stroke="white" strokeWidth="1.5" fill="none" />
    <path
      d="M70,130 C70,110 85,100 100,100 C115,100 130,110 130,130"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M60,150 C60,140 75,130 100,130 C125,130 140,140 140,150"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
    <line x1="60" y1="150" x2="140" y2="150" stroke="white" strokeWidth="1.5" />
    <path
      d="M90,70 A10,10 0 0,1 110,70"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const PrivacyIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="70" y="70" width="60" height="80" rx="5" stroke="white" strokeWidth="1.5" fill="none" />
    <rect x="80" y="100" width="40" height="30" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="100" cy="90" r="10" stroke="white" strokeWidth="1.5" fill="none" />
    <path
      d="M100,80 L100,60"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M85,70 L115,70"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="100" cy="115" r="3" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);
