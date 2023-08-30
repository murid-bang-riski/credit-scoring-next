import { FC, ReactElement } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const IconClose: FC<{ size?: number }> = ({ size }): ReactElement => {
  return <AiOutlineClose size={size} />;
};
