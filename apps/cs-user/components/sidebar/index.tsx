'use client';
import { FC, ReactElement, Fragment, useState } from 'react';
// import Avatar from "react-avatar";
import { usePathname } from 'next/navigation';
import { SidebarProps } from './types';
import { TbLogout } from 'react-icons/tb';
import Link from 'next/link'; // For handling internal links
import Image from 'next/image';

const Sidebar: FC<SidebarProps> = ({ name, avatar }): ReactElement => {
  const router = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoveredSvg, setHoveredSvg] = useState(false);
  const DataSidebar = [
    {
      title: 'Dashboard',
      path: '/dashboard/home',
      icon: '/assets/img/dashboard.svg',
    },
    {
      title: 'User',
      path: '/dashboard/user',
      icon: '/assets/img/user.svg',
    },
    {
      title: 'Permintaan',
      path: '/dashboard/request',
      icon: '/assets/img/permintaan.svg',
    },
    {
      title: 'Laporan',
      path: '/dashboard/report',
      icon: '/assets/img/laporan.svg',
    },
    {
      title: 'Kuota',
      path: '/dashboard/quota',
      icon: '/assets/img/kouta.svg',
    },
  ];
  const activeLink =
    'flex h-[50px] rounded-md cursor-pointer gap-2 p-2 items-center bg-primary-400 text-white';
  const normalLink =
    'flex h-[50px] rounded-md cursor-pointer gap-2 p-2 items-center bg-white text-[#9E9E9E] hover:bg-neutral-300 hover:text-white';
  const activeSvg = 'fill-white stroke-2 stroke-white';
  const normalSvg = 'fill-[#9E9E9E]';
  const [open, setOpen] = useState(true);

  const toggleSidebar = (): void => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <button
        type="button"
        className="z-50 fixed bottom-10 shadow-md right-10 inline-flex items-center p-2 mt-2 ml-3 bg-white text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      ></button>

      <aside
        id="separator-sidebar"
        className={` ${
          open
            ? '  -translate-x-full h-screen overflow-hidden'
            : ' sm:translate-x-0 '
        } absolute lg:relative top-0 left-0 z-50 lg:sm:translate-x-0 w-64 overflow-hidden h-screen transition-transform text-black bg-white `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 text-black bg-white flex justify-between flex-col">
          <div>
            <div className="w-[200px] p-6 top-0">
              <Image src={'/assets/auth/logo.svg'} alt="logo" fill />
            </div>

            <div className="pt-4 font-medium w-full border-[#F5F5F5] ">
              <div className="flex border-b-2 rounded-md cursor-pointer gap-2 px-2 pt-6 pb-6 items-center">
                <div className=" rounded-full border-primary-base border-2 items-center flex">
                  {/* <Avatar
                  name={avatar}
                  className="rounded-full w-[36px] h-[36px]"
                  size="36"
                /> */}
                </div>
                <div className="font-semibold text-sm text-neutral-500">
                  {name}
                </div>
              </div>

              {DataSidebar.map((x, i) => {
                const isActive = router === x.path;
                const isHovered = hoveredIndex === i;
                return (
                  <div key={i} className="my-4">
                    <Link href={x.path} passHref>
                      <div
                        className={isActive ? activeLink : normalLink}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(-1)}
                      >
                        <span className="p-1">
                          <Image
                            style={{
                              filter:
                                isActive || isHovered
                                  ? 'invert(0%)'
                                  : 'invert(60%)',
                            }}
                            className={isActive ? activeSvg : normalSvg}
                            src={x.icon}
                            width={30}
                            height={30}
                            alt={x.title}
                          />
                        </span>
                        <span>{x.title}</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            onMouseEnter={() => setHoveredSvg(true)}
            onMouseLeave={() => setHoveredSvg(false)}
            className="flex gap-2  p-2 rounded-md text-neutral-400  hover:text-red cursor-pointer items-end"
          >
            <span>
              <span className="flex justify-center hover:color-red items-center">
                <TbLogout
                  size={35}
                  stroke={hoveredSvg ? 'red' : 'gray'}
                  className="p-1"
                />
                Keluar
              </span>
            </span>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
