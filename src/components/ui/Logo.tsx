
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  const isWhite = variant === 'white';
  
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4ZM20 32C13.3726 32 8 26.6274 8 20C8 13.3726 13.3726 8 20 8C26.6274 8 32 13.3726 32 20C32 26.6274 26.6274 32 20 32Z" 
                fill="url(#paint0_linear)" />
          <path d="M28 16L20 12L12 16L20 20L28 16Z" fill="url(#paint1_linear)" />
          <path d="M20 20L20 28L28 24L28 16L20 20Z" fill="url(#paint2_linear)" />
          <path d="M20 20L20 28L12 24L12 16L20 20Z" fill="url(#paint3_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor={isWhite ? "#FFFFFF" : "#FF6B00"} />
              <stop offset="1" stopColor={isWhite ? "#DDDDDD" : "#FFD4B3"} />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="12" y1="16" x2="28" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor={isWhite ? "#FFFFFF" : "#FF6B00"} />
              <stop offset="1" stopColor={isWhite ? "#DDDDDD" : "#FFD4B3"} />
            </linearGradient>
            <linearGradient id="paint2_linear" x1="20" y1="20" x2="28" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor={isWhite ? "#FFFFFF" : "#FF6B00"} />
              <stop offset="1" stopColor={isWhite ? "#DDDDDD" : "#FFD4B3"} />
            </linearGradient>
            <linearGradient id="paint3_linear" x1="20" y1="20" x2="12" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor={isWhite ? "#FFFFFF" : "#FF6B00"} />
              <stop offset="1" stopColor={isWhite ? "#DDDDDD" : "#FFD4B3"} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className={`text-xl font-semibold ${isWhite ? 'text-white' : 'text-text'}`}>
        <span>Creativa</span>
        <span className={isWhite ? 'text-white' : 'text-primary'}>Moldes</span>
      </h1>
    </div>
  );
};

export default Logo;
