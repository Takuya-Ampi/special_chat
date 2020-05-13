import React, { useState } from 'react';
import styled from 'styled-components';

interface HeadlineProps {
  pageTitle: string;
};

export const Headline: React.FC<HeadlineProps> = props => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <H1 className="" onClick={toggle} isActive={isActive}>{props.pageTitle}</H1>
  )
};

const H1 = styled.h1<{isActive: boolean}>`
  color: ${props => props.isActive ? '#f00' : '#fff'};

`;
