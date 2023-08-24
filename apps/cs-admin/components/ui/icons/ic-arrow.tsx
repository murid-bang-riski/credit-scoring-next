import { FC, ReactElement } from "react";

interface ColorType {
  color?: string
}

export const IconArrow: FC<ColorType> = ({ color = "#171717" }): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 7.41L10.42 12L15 16.59L13.59 18L7.59 12L13.59 6L15 7.41Z" fill={color} />
    </svg>
  );
};


