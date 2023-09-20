import { FC, ReactElement } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

export const IconPrev: FC<{ size?: number; color?: string }> = ({ size, color }): ReactElement => {
  return <MdArrowBackIosNew size={size} color={color} />;
};
