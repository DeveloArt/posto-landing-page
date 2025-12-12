import React from 'react';

interface IconProps {
  name: string;
  src?: string;
  className?: string;
  filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({ name, src, className = "", filled = false }) => {
  if(src){
    return (
      <img src={src} alt={name} className={className} />
    )
  }else{
      return (
    <span 
      className={`material-symbols-outlined select-none ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : {}}
    >
      {name}
    </span>
  );
  }
};