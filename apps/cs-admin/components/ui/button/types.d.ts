import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: string;
  href?: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}
