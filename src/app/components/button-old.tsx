'use client';

import clsx from 'clsx';
import React from 'react';

export interface ButtonProps {
  //   extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
  disabled?: boolean;
  children: string; //
  onClick: any; //
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-base text-center text-zinc-0 font-medium rounded',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    />
  );
}
