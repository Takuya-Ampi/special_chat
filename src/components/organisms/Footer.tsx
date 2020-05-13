import React from 'react';
import { Navigation } from '../molecules/Navigation';
import { NavigationElementType } from '../../types/NavigationElementType';

interface FooterProps {
  elements: NavigationElementType[];
};

export const Footer: React.FC<FooterProps> = props => {
  return (
    <footer>
      <Navigation {...props}/>
    </footer>
  )
}
