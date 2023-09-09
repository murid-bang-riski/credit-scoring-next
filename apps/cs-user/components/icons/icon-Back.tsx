import { FC, ReactElement } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export const IconBack: FC<{ size?: number; color?: string }> = ({
  size,
  color,
}): ReactElement => {
  return <IoIosArrowBack size={size} color={color} />;
};
