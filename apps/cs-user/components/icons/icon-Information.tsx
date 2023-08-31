import { FC, ReactElement } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';

export const IconInfo: FC<{ size?: number }> = ({ size }): ReactElement => {
  return <AiFillInfoCircle size={size} />;
};
