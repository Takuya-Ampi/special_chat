import React from 'react';
import { Header } from '../organisms/Header';

interface MainLayout {
  children: React.ReactNode;
  pageTitle: string;
}

export const MainLayout: React.FC<MainLayout> = props => {
  return (
    <div>
      <Header pageTitle={props.pageTitle}/>
      <main>
        {props.children}
      </main>
    </div>
  )
}
