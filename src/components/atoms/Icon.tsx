import React from 'react';

interface IconProps {
  src: string;
  alt: string;
};

export const Icon: React.FC<IconProps> = props => {
  return (
    <img src={props.src} alt={props.alt}/>
  )
}
