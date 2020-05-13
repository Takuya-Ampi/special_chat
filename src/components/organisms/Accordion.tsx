import React from 'react';
import { Friend } from '../molecules/Friend';

import { UserType } from '../../types/UserType';

interface AccordionProps {
  users: UserType[];
}


export const Accordion: React.FC<AccordionProps> = props => {

  return (
    <div>
      {
        props.users.map(user => {
          return (
            <Friend user={user}/>
          )
        })
      }
    </div>
  )
}
