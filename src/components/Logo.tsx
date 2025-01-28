import React from 'react';

interface LogoProps {
  className?: string;
  white?: boolean;
}

export default function Logo({ className = "", white = false }: LogoProps) {
  return (
    <img 
      src="https://i.imgur.com/YQjjhpX.png" 
      alt="EXP Graphics Logo" 
      className={`h-12 ${className} ${white ? 'brightness-0 invert' : ''}`}
    />
  );
}