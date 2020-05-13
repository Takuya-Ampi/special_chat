import React from 'react';
import styled from 'styled-components';
import { IconType } from '../../types/IconType';
import { Icon } from '../atoms/Icon';

interface IconGroupProps {
  icons: IconType[];
}

export const IconGroup: React.FC<IconGroupProps> = props => {
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
