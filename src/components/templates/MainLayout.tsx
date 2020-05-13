import React, { forwardRef } from 'react';
import { InputHandler } from '../atoms/Input';
import { NavigationElementType } from '../../types/NavigationElementType';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';


interface MainLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  navigationElements: NavigationElementType[];
  onSearchClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MainLayout = forwardRef<InputHandler, MainLayoutProps>((props, ref) => {
  return (
    <div>
      <Header pageTitle={props.pageTitle} onClick={props.onSearchClick} ref={ref}/>
      <main>
        {props.children}
      </main>
      <Footer elements={props.navigationElements} />
    </div>
  )
})
