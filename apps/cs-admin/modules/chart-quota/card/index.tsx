import { Button } from "@/components/ui/button";
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
  as,
  onClick,
}): ReactElement => {
  return (
    <>
      <div
        data-testid="card"
        className={`${className} relative flex auto flex-col cursor-default rounded bg-white`}
        onClick={onClick}
      >
        {title && (
          <div className={titleStyle}>
            <h1>{title}</h1>
          </div>
        )}
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full ">{children}</div>
          <div className={bodyClassName}>
            {hasButton && (
              <Link href={`${buttonHref}`} as={`${as}`}>
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
    </>
  );
};

export default CardCS;
