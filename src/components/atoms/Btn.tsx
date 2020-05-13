import React from 'react';
import { BtnType } from '../../types/BtnType';



export const Btn: React.FC<BtnType> = props => {
  return (
    <a href={props.Href}>{props.BtnName}</a>
  )
}
