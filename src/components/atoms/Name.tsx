import React from 'react';
import { NameType } from '../../types/NameType';




export const Name: React.FC<NameType> = props => {
  return (
    <h2>{props.content}</h2>
  )
}
