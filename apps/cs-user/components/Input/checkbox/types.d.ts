import { FieldValues, UseControllerProps } from 'react-hook-form';

export type TCheckbox<T extends FieldValues> = UseControllerProps<T> & {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  success?: string | boolean;
  warning?: string;
  variant: 'lg' | 'md' | 'sm';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
