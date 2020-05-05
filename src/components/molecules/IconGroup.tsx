import React from 'react';
import { Icon } from '../atoms/Icon';

interface IconProps {
  src: string;
  alt: string;
};

interface IconGroupProps {
  icons: IconProps[];
}

export const IconGroup: React.FC<IconGroupProps> = props => {
  return (
    <div>
      {
        props.icons.map(icon => {
          return (
            <Icon src={icon.src} alt={icon.alt}/>
          )
        })
      }
    </div>
  )
}
