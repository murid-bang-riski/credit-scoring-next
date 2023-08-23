import { FC, ReactElement } from 'react';
import { AiFillEye } from 'react-icons/ai';

export const IconEyeOpen: FC<{ size?: number }> = ({ size }): ReactElement => {
  return <AiFillEye size={size} />;
};
