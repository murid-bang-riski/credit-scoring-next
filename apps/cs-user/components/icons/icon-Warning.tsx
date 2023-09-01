import { FC, ReactElement } from 'react';
import { IoIosWarning } from 'react-icons/io';

export const IconWarning: FC<{ size?: number; color?: string }> = ({
  size,
  color,
}): ReactElement => {
  return <IoIosWarning size={size} color={color} />;
};
