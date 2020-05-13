import React from 'react';
import { NavigationElement } from '../atoms/NavigationElement';
import { NavigationElementType } from '../../types/NavigationElementType';

interface NavigationProps {
  elements: NavigationElementType[];
};

export const Navigation: React.FC<NavigationProps> = props => {
  return (
    <div>
      {
        props.elements.map(elem => {
          return (
            <NavigationElement {...elem}/>
          )
        })
      }
    </div>
  )
}
