import { FC, ReactElement } from 'react';
import { IButtonProps } from './types';
import Link from 'next/link';

export const Button: FC<IButtonProps> = ({
  children,
  // loading,
  href,
  // disabled,
  ...props
}): ReactElement => {
  if (href) {
    <Link href={href}>
      <button {...props}>{children}</button>
    </Link>;
  }
  return <button {...props}>{children}</button>;
};
