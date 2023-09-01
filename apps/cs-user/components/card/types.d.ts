import { MouseEventHandler, ReactNode } from 'react';

export type TCardProps = {
  className?: string;
  numberCard?: number;
  headerClassName?: string;
  bodyClassName?: string;
  title?: string;
  onSelect?: MouseEventHandler<HTMLDivElement>;
  hasNumber?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  src?: StaticImport;
  topText?: string;
  hasButton?: boolean;
  classnameCorousel?:string;
  href?: string;
  imgStyle?: string;
  buttonClassName?: string;
  buttonColor?: ButtonProps.color;
  buttonText?: string;
  buttonTextStyle?: string;
  buttonHref?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
