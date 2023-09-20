import { FC, ReactElement } from "react";
import { MdEdit } from "react-icons/md";

export const IconEdit: FC<{ size?: number; color?: string }> = ({ size, color }): ReactElement => {
  return <MdEdit size={size} color={color} />;
};
