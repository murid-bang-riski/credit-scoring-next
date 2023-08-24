import { FC, ReactElement, Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

export const ChartFilter: FC = (): ReactElement => {
  const [isActive, setisActive] = useState('Bulan');
  return (
    <div className="flex flex-row gap-2 justify-center">
      <section>
        <div className="flex text-sm z-10">
          <Menu as="div" className="inline-block text-center ">
            <Menu.Button
              className={`${
                isActive === 'Tahun'
                  ? 'text-primary-400 border border-primary-500 '
                  : 'text-primary-400'
              } px-3 bg-white hover:bg-primary-400 hover:text-white rounded-md cursor-pointer text-center w-[100px] h-9`}
              onClick={() => setisActive('Tahun')}
            >
              Tahun
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="snap-y">
                <div className="px-1 bg-[#F6FBFA] overflow-y-auto h-[100px] ">
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    2012
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    2013
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    2014
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    2015
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    2016
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    2017
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    2018
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    2019
                  </Menu.Items>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </section>
      <section>
        <div>
          <Menu as="div" className=" text-center text-sm">
            <Menu.Button
              className={`${
                isActive === 'Bulan'
                  ? 'text-primary-400 border border-primary-500 '
                  : 'text-primary-400'
              } px-3 bg-white hover:bg-primary-400 hover:text-white rounded-md cursor-pointer text-center w-[100px] h-9`}
              onClick={() => setisActive('Bulan')}
            >
              Bulan
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="snap-y w-[100px] relative z-50">
                <div className="px-1 bg-[#F6FBFA] overflow-y-auto h-[100px] ">
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Januari
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Feb
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Maret
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    April
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Mei
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Juni
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Juli
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Agust
                  </Menu.Items>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </section>
      <section>
        <div className=" flex text-sm  z-10">
          <Menu as="div" className=" inline-block text-center">
            <Menu.Button
              className={`${
                isActive === 'Minggu'
                  ? 'text-primary-400 border border-primary-500 '
                  : 'text-primary-400'
              } px-3 bg-white hover:bg-primary-400 hover:text-white rounded-md cursor-pointer text-center w-[100px] h-9`}
              onClick={() => setisActive('Minggu')}
            >
              Minggu
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="snap-y w-[100px] ">
                <div className="px-1 bg-[#F6FBFA] overflow-y-auto h-[100px] ">
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Minggu 1
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Minggu 2
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Minggu 3
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Minggu 4
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Minggu 5
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Minggu 6
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Minggu 7
                  </Menu.Items>
                  <Menu.Items className="text-primary-400 text-xs cursor-pointer py-1 hover:bg-primary-500 hover:text-white">
                    Minggu 8
                  </Menu.Items>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </section>
    </div>
  );
};
