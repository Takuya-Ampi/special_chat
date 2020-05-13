import React, { forwardRef } from 'react';
import { InputHandler } from '../atoms/Input';
import styled from 'styled-components';
import { Headline } from '../atoms/Headline';
import { IconGroup } from '../molecules/IconGroup';
import { Icon } from '../atoms/Icon';
import { SingleInputForm } from '../molecules/SingleInputForm';


interface HeaderProps {
  pageTitle: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Header = forwardRef<InputHandler, HeaderProps>((props, ref) => {
  const icons = [
    {src: 'src1', alt: 'alt1'},
    {src: 'src2', alt: 'alt2'},
  ];

  return (
    <CommonHeader>
      <DivTop>
        <Icon src={'srcx'} alt={'altx'} width={24} height={24} />
        <Headline pageTitle={props.pageTitle}/>
        <IconGroup icons={icons}/>
      </DivTop>
      <DivBottom>
        <SingleInputForm ref={ref} onClick={props.onClick} buttonText='検索'/>
      </DivBottom>
    </CommonHeader>
  )
});

const CommonHeader = styled.header`
  width: 100%;
  height: 100px;
  background: #212121;
`
const DivTop = styled.div`
  height: 50%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const DivBottom = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
