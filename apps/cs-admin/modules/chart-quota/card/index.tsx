/* eslint-disable react/jsx-no-useless-fragment */

import { Button } from "components/button";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { TCardProps } from "./type";

export const CardCS: FC<TCardProps> = ({
  className,
  bodyClassName,
  children,
  title,
  href,
  titleStyle,
  hasButton,
  buttonClassName,
  buttonColor,
  buttonText,
  buttonTextstyle,
  buttonHref,
  onClick,
}): ReactElement => {
  return (
    <>
      {href ? (
        <Link href={`${href}`}>
          <div
            className={`${className} flex auto p-4 flex-col rounded bg-white`}
            onClick={() => onClick}
          >
            <section className="flex">{children}</section>
            <h1 className={titleStyle}>{title}</h1>
          </div>
        </Link>
      ) : (
        <div
          data-testid="card"
          className={`${className} relative flex auto flex-col cursor-default rounded bg-white`}
          onClick={onClick}
        >
          <div className={titleStyle}>
            <h1>{title}</h1>
          </div>
          <div className="flex flex-col w-full h-full">
            <div className="flex w-full ">{children}</div>
            <div className={bodyClassName}>
              {hasButton && (
                <Link href={`${buttonHref}`}>
                  <section className="flex justify-end items-end">
                    <Button type="button" className={buttonClassName + " " + buttonColor}>
                      {buttonText}
                    </Button>
                  </section>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardCS;
