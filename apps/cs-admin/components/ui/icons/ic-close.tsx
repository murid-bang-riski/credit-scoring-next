import { FC, ReactElement } from "react";

export const IconClose: FC = (): ReactElement => {
  return (
    <div>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 0.5C19.9125 0.5 25.5 6.0875 25.5 13C25.5 19.9125 19.9125 25.5 13 25.5C6.0875 25.5 0.5 19.9125 0.5 13C0.5 6.0875 6.0875 0.5 13 0.5ZM17.4875 6.75L13 11.2375L8.5125 6.75L6.75 8.5125L11.2375 13L6.75 17.4875L8.5125 19.25L13 14.7625L17.4875 19.25L19.25 17.4875L14.7625 13L19.25 8.5125L17.4875 6.75Z"
          fill="#C2C2C2"
        />
      </svg>
    </div>
  );
};
