import React from 'react';
import styled from 'styled-components';
import { IconType } from '../../types/IconType';

interface IconProps extends IconType {
  width: number;
  height: number;
};

export const Icon: React.FC<IconProps> = props => {
  return (
    <Img {...props} />
  )
}

const Img = styled.img<IconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`
