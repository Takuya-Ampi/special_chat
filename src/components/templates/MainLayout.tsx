import React from 'react';
import { NavigationElementType } from '../../types/NavigationElementType';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';

interface MainLayout {
  children: React.ReactNode;
  pageTitle: string;
  navigationElements: NavigationElementType[];
}

export const MainLayout: React.FC<MainLayout> = props => {
  return (
    <div>
      <Header pageTitle={props.pageTitle} />
      <main>
        {props.children}
      </main>
      <Footer elements={props.navigationElements} />
    </div>
  )
}
