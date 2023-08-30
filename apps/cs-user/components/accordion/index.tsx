import { FC, ReactElement, useState } from 'react';
import Image from 'next/image';
import { TAccordionProps } from './types';
import { IconDownArrow } from '@cs-user/components';

export const Accordion: FC<TAccordionProps> = ({
  title,
  idAccordion,
  children,
  disabled,
  className,
  classNameChildren,
  hasImage,
  src,
  imgheight,
  imgwidth,
  styleImg,
}): ReactElement => {
  const [isOpen, setIsOpen] = useState('');
  return (
    <div data-accordion="collapse" data-testid="accordion" className="mb-8">
      <h2>
        <button
          onClick={() =>
            isOpen === '' ? setIsOpen(`${idAccordion}`) : setIsOpen('')
          }
          type="button"
          className={`flex items-center justify-between w-full p-4 font-medium text-left rounded-xl  bg-[#F5F5F5] ${className} `}
          disabled={disabled}
        >
          {hasImage && (
            <Image
              alt="Picture of the author"
              src={src}
              className={styleImg}
              width={imgwidth}
              height={imgheight}
            />
          )}
          <div className="text-[16px] font-[500] text-[#262626]">{title}</div>
          <IconDownArrow
            size={16}
            className={isOpen && 'rotate-180 transition-transform'}
          />
        </button>
      </h2>
      {isOpen === `${idAccordion}` ? (
        <div>
          <div
            className={`p-6 text-[14px] font-[400] text-[#262626] dark:text-[#fff] ${classNameChildren}`}
          >
            {children}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
