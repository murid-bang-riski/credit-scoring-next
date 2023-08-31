import { FC, ReactElement } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export const IconDownArrow: FC<{ size?: number; className?: string }> = ({
  size,
  className,
}): ReactElement => {
  return <FiChevronDown size={size} className={className} />;
};
