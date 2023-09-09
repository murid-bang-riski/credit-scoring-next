import { FC, ReactElement } from "react";
import { BiMinus } from "react-icons/bi";

export const IconMinus: FC<{ size?: number; color?: string }> = ({ size, color }): ReactElement => {
  return <BiMinus size={size} color={color} />;
};
