import { FC, ReactElement } from "react";

interface IIconBack {
  disabled?: boolean;
}

export const IconBack: FC<IIconBack> = ({ disabled }): ReactElement => {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.000156403 6L6.00016 0L7.41016 1.41Z"
        fill={disabled ? "#A3A3A3" : "#4AC1A2"}
      />
    </svg>
  );
};
