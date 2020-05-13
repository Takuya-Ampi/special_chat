import React from 'react';
import styled from 'styled-components';
import { Icon } from '../atoms/Icon';

interface IconProps {
  src: string;
  alt: string;
};


interface NavIconGroupProps {
  icons: IconProps[];
}

export const NavIconGroup: React.FC<NavIconGroupProps> = props => {
  return (
    <Div>
      {
        props.icons.map(icon => {
          return (
            <div>
              <Icon src={icon.src} alt={icon.alt} width={24} height={24}/>
            </div>
          )
        })
      }
    </Div>
  )
}

const Div = styled.div`
  display: flex;
`;
