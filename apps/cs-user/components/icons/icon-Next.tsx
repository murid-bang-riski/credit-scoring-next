import { FC, ReactElement } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export const IconNext: FC<{ size?: number; color?: string }> = ({ size, color }): ReactElement => {
  return <MdOutlineArrowForwardIos size={size} color={color} fill={color} />;
};
