import { FC, ReactElement } from 'react';
import { BsCalendar4Week } from 'react-icons/bs';

export const IconCalendar: FC<{ size?: number }> = ({ size }): ReactElement => {
  return <BsCalendar4Week size={size} />;
};
