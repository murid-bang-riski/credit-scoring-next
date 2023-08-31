import { Button } from '@cs-user/components';
import Link from 'next/link';
import { FC, ReactElement, Fragment } from 'react';
import { TCardProps } from './types';

import React from 'react';

export const Card: FC<TCardProps> = ({
  className,
  numberCard,
  bodyClassName,
  children,
  title,
  href,
  onSelect,
  titleStyle,
  hasButton,
  buttonClassName,
  buttonColor,
  buttonText,
  classnameCorousel,
  hasNumber,
  buttonTextStyle,
  buttonHref,
  onClick,
}): ReactElement => {
  return (
    <div className='flex justify-start items-start' >
      {href ? (
        <Link href={`${href}`}>
          <div
            className={`${className} flex flex-col rounded bg-white`}
            onClick={() => onClick}
          >
            <section className="flex">{children}</section>
            <h1 className={titleStyle}>{title}</h1>
          </div>
        </Link>
      ) : (
        <div
          data-testid="card"
          className={`${className} relative flex flex-col cursor-default rounded bg-white shadow-md`}
          onClick={onClick}
          onSelect={onSelect}
        >
          {
          hasNumber&& (
              <div className="absolute right-4 w-8  top-4  h-8 bg-[#f9f9f9] rounded-full flex justify-center items-center p-2">
                <span>
                  {numberCard}
                </span>
              </div>
          )
        }
          
          <div className={titleStyle}>
            <h1>{title}</h1>
          </div>
          <div className={`flex justify-start flex-col items-center w-full ${classnameCorousel} h-full`}>
            <div className="flex w-full justify-center items-center">{children}</div>
            <div className={bodyClassName}>
              {hasButton && (
                <Link href={`${buttonHref}`}>
                  <section className="flex justify-end items-end">
                    <Button
                      type="button"
                      className={buttonClassName + ' ' + buttonColor}
                    >
                      {buttonText}
                    </Button>
                  </section>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
