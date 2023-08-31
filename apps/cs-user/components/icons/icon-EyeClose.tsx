import { FC, ReactElement } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';

export const IconEyeClose: FC<{ size?: number }> = ({ size }): ReactElement => {
  return <AiFillEyeInvisible size={size} />;
};
