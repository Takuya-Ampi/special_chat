import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

export const Button: React.FC<ButtonProps> = props => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
};
