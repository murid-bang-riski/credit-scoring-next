import { FC, ReactElement } from 'react';
import { GrNext } from 'react-icons/gr';

export const IconPrev: FC<{ size?: number }> = ({ size }): ReactElement => {
  return <GrNext size={size} />;
};
