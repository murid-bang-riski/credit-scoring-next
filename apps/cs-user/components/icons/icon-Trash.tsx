import { FC, ReactElement } from "react";
import { BiSolidTrashAlt } from "react-icons/bi";

export const IconTrash: FC<{ size?: number; color?: string }> = ({ size, color }): ReactElement => {
  return <BiSolidTrashAlt size={size} color={color} />;
};
