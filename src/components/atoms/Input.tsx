import React, { useRef, forwardRef, useImperativeHandle } from 'react';

export interface InputHandler {
  value: () => string;
}

export const Input = forwardRef<InputHandler>((_, ref) => {
  const inputRef = useRef({} as HTMLInputElement);

  useImperativeHandle(ref, () => {
    return {
      value: () => inputRef.current.value,
    }
  });

  return (
    <input type="text" ref={inputRef}></input>
  )
});
