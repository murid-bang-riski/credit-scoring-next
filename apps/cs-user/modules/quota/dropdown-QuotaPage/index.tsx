import { Menu, Transition } from '@headlessui/react';
import { IconDownArrow } from 'components/icons';
import { TDropdownQuotaProps } from './types';
import { Fragment, FC } from 'react';

export const DropdownQuotaPage: FC<TDropdownQuotaProps> = ({
  data,
  placeholder,
}) => {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-56 justify-between items-center rounded-md px-4 py-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 shadow-lg">
            {placeholder}
            <IconDownArrow className="ml-2 -mr-1 h-5 w-5 " />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {data.map((x, i) => (
                <Menu.Item key={`menu${i}`}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-primary-400 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {x.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
