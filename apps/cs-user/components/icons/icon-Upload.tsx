import { FC, ReactElement } from 'react';
import { FiUpload } from 'react-icons/fi';

export const IconUpload: FC<{ size?: number; color?: string }> = ({
  size,
  color,
}): ReactElement => {
  return <FiUpload size={size} color={color} />;
};
