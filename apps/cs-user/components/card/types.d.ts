import { MouseEventHandler, ReactNode } from 'react';

export type TCardProps = {
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  src?: StaticImport;
  topText?: string;
  hasButton?: boolean;
  href?: string;
  imgStyle?: string;
  buttonClassName?: string;
  buttonColor?: ButtonProps.color;
  buttonText?: string;
  buttonTextStyle?: string;
  buttonHref?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
