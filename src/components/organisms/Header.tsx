import React from 'react';

import { Headline } from '../atoms/Headline';
import { IconGroup } from '../molecules/IconGroup';

interface HeaderProps {
  pageTitle: string;
};

export const Header: React.FC<HeaderProps> = props => {
  const icons = [
    {src: 'src1', alt: 'alt1'},
    {src: 'src2', alt: 'alt2'},
    {src: 'src3', alt: 'alt3'},
    {src: 'src4', alt: 'alt4'},
  ];

  return (
    <header>
      <Headline pageTitle={props.pageTitle}/>
      <IconGroup icons={icons}/>
    </header>
  )
}
