import { FC, ReactElement } from 'react';
import { BiPlus } from 'react-icons/bi';

export const IconPlus: FC<{ size?: number }> = ({ size }): ReactElement => {
  return <BiPlus size={size} />;
};
