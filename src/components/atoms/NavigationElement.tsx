import React from 'react';
import { NavigationElementType } from '../../types/NavigationElementType';
import { Icon } from './Icon';

export const NavigationElement: React.FC<NavigationElementType> = props => {
  return (
    <div>
      <Icon src={props.icon.src} alt={props.icon.alt} width={24} height={24}/>
      <p>{props.content}</p>
    </div>
  )
}
