import React from 'react';
import { UserType } from '../../types/UserType';
import { Icon } from '../atoms/Icon';
import { Name } from '../atoms/Name';
import { SmallText } from '../atoms/SmallText';


interface FriendProps {
  user: UserType;
}

export const Friend: React.FC<FriendProps> = props => {
  return (
    <div>
      <div>
        <Icon src={props.user.icon.src} alt={props.user.icon.alt} width={32} height={32} />
      </div>
      <div>
        <Name content={props.user.name}/>
        <SmallText content={props.user.comment}/>
      </div>
    </div>
  )
}
