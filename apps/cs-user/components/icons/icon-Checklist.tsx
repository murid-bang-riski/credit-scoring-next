import { FC, ReactElement } from 'react';
import { MdChecklist } from 'react-icons/md';

export const IconChecklist: FC<{ size?: number }> = ({
  size,
}): ReactElement => {
  return <MdChecklist size={size} />;
};
