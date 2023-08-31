import { ReactElement } from 'react';
import { TCheckbox } from './types';
import { FieldValues, useController } from 'react-hook-form';

export const Checkbox = <T extends FieldValues>({
  variant = 'lg',
  ...props
}: TCheckbox<T>): ReactElement => {
  const { field } = useController(props);
  return (
    <label
      htmlFor={props.name}
      className={`
       ${props.className} 
       ${props.disabled && 'text-neutral-500'}
       ${variant === 'lg' && 'text-[18px]'}
       ${variant === 'md' && 'text-[16px]'}
       ${variant === 'sm' && 'text-[14px]'}
      flex items-center`}
    >
      <input
        {...props}
        {...field}
        type="checkbox"
        id={props.name}
        className="mr-2 accent-primary-base"
      />
      {props.label}
    </label>
  );
};
