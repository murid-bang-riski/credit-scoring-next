import { FC, ReactElement } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

export const IconSearch: FC<{ size?: number }> = ({ size }): ReactElement => {
  return <RiSearch2Line size={size} />;
};
