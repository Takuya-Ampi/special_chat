import React, { useState, useEffect, useCallback, useRef } from 'react';
import { InputHandler } from '../atoms/Input';
import { Accordion } from '../organisms/Accordion';
import { UserType } from '../../types/UserType';
import axios from '../../apiMock';
import { NavigationElementType } from '../../types/NavigationElementType';
import { MainLayout } from '../templates/MainLayout';

export const Home: React.FC = () => {
  const [navigationElements, setNavigationElements] = useState<NavigationElementType[]>([]);

  const [friends, setFriends] = useState<UserType[]>([]);

  const fetchNavigationElements = useCallback(async () => {
    const navigationElementsData = await axios
      .get('/navigations')
      .then(res => res.data.items)
      .catch(err => console.log(err));
    setNavigationElements(navigationElementsData ? navigationElementsData : []);
  }, [setNavigationElements]);

  const fetchFriends = useCallback(async () => {
    const friendsData = await axios
      .get('/friends')
      .then(res => res.data.data)
      .catch(err => console.log(err));
    setFriends(friendsData ? friendsData : []);
  }, [setFriends]);

  useEffect(() => {
    fetchNavigationElements();
    fetchFriends();

    return () => {
      setNavigationElements([]);
      setFriends([]);
    };
  }, [fetchNavigationElements, fetchFriends]);

  const searchInputRef = useRef({} as InputHandler);
  const search = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(searchInputRef.current.value());
  };


  return (

    <MainLayout
      pageTitle={'ホーム'}
      navigationElements={navigationElements}
      onSearchClick={search}
      ref={searchInputRef}
    >
      <div>
        <Accordion users={friends} />
      </div>
    </MainLayout>
  )
}
