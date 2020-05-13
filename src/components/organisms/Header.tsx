import React from 'react';
import styled from 'styled-components';
import { Headline } from '../atoms/Headline';
import { IconGroup } from '../molecules/IconGroup';
import { Icon } from '../atoms/Icon';

interface HeaderProps {
  pageTitle: string;
};

export const Header: React.FC<HeaderProps> = props => {
  const icons = [
    {src: 'src1', alt: 'alt1'},
    {src: 'src2', alt: 'alt2'},
  ];

  return (
    <CommonHeader>
      <Icon src={'srcx'} alt={'altx'} width={24} height={24} />
      <Headline pageTitle={props.pageTitle}/>
      <IconGroup icons={icons}/>
    </CommonHeader>
  )
}
const CommonHeader = styled.header`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #212121;
`
