import React, { forwardRef } from 'react';
import { Input, InputHandler } from '../atoms/Input';
import { Button } from '../atoms/Button';

interface SingleInputFormProps {
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
  buttonText: string;
};

export const SingleInputForm = forwardRef<InputHandler, SingleInputFormProps>((props, ref) => {
  return (
    <form>
      <Input ref={ref}/>
      <Button onClick={props.onClick} text={props.buttonText}/>
    </form>
  )
});
