import React from 'react';
import { SerchBarType } from '../../types/SerchBarType';

export const SerchBar: React.FC<SerchBarType> = props => {

  return (
    <form method={props.method} >
      <input type={props.type} placeholder={props.placeholder}/>
      <input type={props.type} value={props.value}/>
    </form>
  )
};
