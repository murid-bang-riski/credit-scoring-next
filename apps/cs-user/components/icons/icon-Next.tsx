import { FC, ReactElement } from 'react';
import { GrPrevious } from 'react-icons/gr';

export const IconNext: FC<{ size?: number }> = ({ size }): ReactElement => {
  return <GrPrevious size={size} />;
};
