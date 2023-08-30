"use client";

import { FC, ReactElement, Fragment, useState } from "react";
import { IconGrafic, IconLogout, IconQuotaAdmin, IconToggle } from "../ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar: FC = (): ReactElement => {
  const pathName = usePathname();
  const DataSidebar = [
    {
      id: 1,
      title: "Permintaan Kuota",
      path: "/admin",
      icon: <IconQuotaAdmin />,
    },
    {
      id: 2,
      title: "Grafik Kuota",
      path: "/admin/chart-quota",
      icon: <IconGrafic />,
    },
    {
      id: 3,
      title: "Keluar",
      path: "/",
      icon: <IconLogout />,
    },
  ];

  const activeLink =
    "flex rounded-md cursor-pointer gap-2 p-2 items-center bg-white text-primary-600 shadow-md";
  const normalLink =
    "flex rounded-md cursor-pointer gap-2 p-2 items-center bg-add2 text-[#9E9E9E] hover:bg-neutral-300 hover:text-white";
  const [open, setOpen] = useState(true);
  const toggleSidebar = (): void => {
    setOpen(!open);
  };

  const pathname = usePathname();
  return (
    <Fragment>
      <button
        type="button"
        className="z-50 fixed bottom-10 shadow-md right-10 inline-flex items-center p-2 mt-2 ml-3 bg-add2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <IconToggle />
      </button>

      <aside
        id="separator-sidebar"
        className={` ${
          open ? "  -translate-x-full" : " sm:translate-x-0 "
        } absolute lg:relative top-0 left-0 z-50 lg:sm:translate-x-0 w-64 h-full transition-transform bg-add2 `}
        aria-label="Sidebar"
      >
        <div className="h-screen px-3 py-4  bg-add2 border-b">
          <Link href={"/admin"}>
            <Image
              src="/logo.svg"
              alt="logo"
              width={300}
              height={300}
              className="w-[300px] h-auto p-6"
              priority={true}
            />
          </Link>
          <div className="pt-4 font-medium w-full border-neutral-100">
            {DataSidebar.map((item) => (
              <div key={item.id} className="my-4">
                <Link href={item.path} className={item.path === pathName ? activeLink : normalLink}>
                  <span className="p-1">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
