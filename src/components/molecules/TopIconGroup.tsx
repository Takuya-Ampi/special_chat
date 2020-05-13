import React from 'react';
import { IconType } from '../../types/IconType';
import { NameType } from '../../types/NameType';
import { BtnType } from '../../types/BtnType';
import { Icon } from '../atoms/Icon';
import { Name } from '../atoms/Name';

interface TopIconGroupProps {
  icon: IconType;
  name: NameType;
  btn: BtnType;
  width: number;
  height: number;
}

export const TopIconGroup: React.FC<TopIconGroupProps> = props => {
  return (
    <div>
      <Icon src={props.icon.src} alt={props.icon.alt} width={props.width} height={props.height} />
      <Name content={props.name.content}/>
    </div>
  )
}
