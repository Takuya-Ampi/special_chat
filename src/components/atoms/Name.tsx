import React from 'react';

interface NameProps {
  content: string;
};

export const Name: React.FC<NameProps> = props => {
  return (
    <h2>{props.content}</h2>
  )
}
