"use client";
import { ReactElement, useState } from "react";
import { FieldValues, useController } from "react-hook-form";
import { TTextFieldProps } from "./types";
import { clsx } from "clsx";
import { IconChecklist, IconEyeClose, IconEyeOpen } from "../../icons";

export const TextField = <T extends FieldValues>({
  variant = "lg",
  type = "text",
  status = "none",
  isTextArea = false,
  textAreaRow = 3,
  ...props
}: TTextFieldProps<T>): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword((prevState) => !prevState);
  };

  const { field } = useController({
    ...props,
    rules: { required: props.required },
  });

  const labelVariant = clsx("text-[#000] ", {
    "text-[18px] font-bold": variant === "lg",
    "text-[16px] font-bold": variant === "md",
    "text-[14px] font-bold": variant === "sm",
  });

  const inputStatus = clsx({
    "focus:ring-1 focus:ring-error-base placeholder:text-white ring-1 ring-error-base text-sm":
      status === "error",
    "focus:ring-1 focus:ring-success-base  text-sm": status === "success",
    "focus:ring-1 focus:ring-warning-base  text-sm": status === "warning",
    "border-[0.5px] border-neutral-400 shadow-sm": status === "none" || status === undefined,
  });

  const inputVariant = clsx({
    "py-4 rounded-lg": variant === "lg",
    "py-2 rounded-md": variant === "md",
    "p-1 rounded-md": variant === "sm",
  });

  const inputDefaultStyle = "outline-none focus:outline-none w-full text-[#000] text-sm";

  const inputExtras = clsx({
    "pl-[40px]": props.prepend,
    "pr-[40px]": props.append,
    "px-4": !props.append && !props.prepend,
  });

  const messageStatus = clsx({
    "text-error-base": status === "error",
    "text-warning-base": status === "warning",
    "text-success-base": status === "success",
    hidden: status === "none",
  });

  return (
    <section>
      {props.label && (
        <label htmlFor={props.name} className={`${labelVariant} ${props.labelClassName}`}>
          {props.label}
          {props.required && <span className="ml-1 font-bold text-error-600">*</span>}
        </label>
      )}

      <section className="relative">
        {props.prepend && (
          <label
            className="items-center inset-0 absolute flex items justify-center w-[40px]"
            htmlFor={props.name}
          >
            {props.prepend}
          </label>
        )}
        {!isTextArea ? (
          <input
            type={type === "password" ? (!showPassword ? type : "text") : type}
            {...{ ...props, ...field }}
            className={`${inputDefaultStyle} ${inputStatus} ${inputVariant}  ${inputExtras} `}
          />
        ) : (
          <textarea
            rows={textAreaRow}
            {...{ ...props, ...field }}
            className={`w-full ${inputStatus}  ${props.className} `}
          />
        )}

        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {status === "success" && <IconChecklist size={20} />}
          {type === "password" && (
            <button type="button" onClick={toggleShowPassword}>
              {type === "password" && !showPassword ? <IconEyeClose /> : <IconEyeOpen />}
            </button>
          )}

          {props.append && (
            <label className="flex items-end justify-center w-auto " htmlFor={props.name}>
              {props.append}
            </label>
          )}
        </div>
      </section>

      <div className="flex flex-col items-start w-full gap-x-1">
        <span className="text-grey-600">{props.hint}</span>
        <span className={`${messageStatus} text-xs`}>{props.message}</span>
      </div>
    </section>
  );
};
