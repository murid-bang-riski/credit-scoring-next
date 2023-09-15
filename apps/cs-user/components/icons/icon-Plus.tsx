import { FC, ReactElement } from "react";
import { BiPlus } from "react-icons/bi";

export const IconPlus: FC<{ size?: number; color?: string }> = ({ size, color }): ReactElement => {
  return <BiPlus size={size} color={color} />;
};
