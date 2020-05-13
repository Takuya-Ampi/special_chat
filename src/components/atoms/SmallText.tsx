import React from 'react';

interface SmallTextProps {
  content: string;
};

export const SmallText: React.FC<SmallTextProps> = props => {
  return (
    <small>{props.content}</small>
  )
}
