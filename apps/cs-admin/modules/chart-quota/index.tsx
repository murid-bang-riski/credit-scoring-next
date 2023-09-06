"use client";
import { IconChartDown, IconChartUp } from "@components";
import Image from "next/image";
import { FC, ReactElement } from "react";
import CardCS from "./card";
import { dummy } from "./constants";
import MenuDropdown from "./dropdown";
import { ChartBranchActivity, ChartExpenditure, ChartQuotaUsage } from "./grafik";

const ChartQuotaModules: FC = (): ReactElement => {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 mx-4 pt-5">
        {dummy.map((item) => (
          <CardCS
            key={item.id}
            hasButton={true}
            buttonText="Lihat Semua"
            buttonHref={item.link}
            as={item.link}
            buttonClassName={`flex mb-2 py-2 justify-center rounded-md font-bold  items-end my-2 ${item.classButton} w-full shadow-lg `}
            className="w-full m-3 min-h-[171px] absolute shadow-md px-4"
          >
            <div className="flex flex-row w-full h-full space-x-[10px] py-4">
              <Image
                src={item.icon}
                alt="image"
                width="0"
                height="0"
                priority={true}
                style={{ width: "70px", height: "auto" }}
              />
              <section className="flex-col w-full justify-center space-y-1">
                <p className="text-[14px] font-semibold text-neutral-600">{item.title}</p>
                <p className="text-black text-[28px]">{item.desc}</p>
              </section>
            </div>
          </CardCS>
        ))}
      </div>
      <div className="border-2 ml-7 p-2 h-fit overflow-x-auto">
        <section className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Grafik Pemakaian Kuota Per-Cabang Tahun 2023</h1>
          <MenuDropdown />
        </section>
        <section className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Data Periode Tahun 2023</p>
          <span>
            <span className="flex items-center gap-2">
              <IconChartUp />
              <p className="text-success-500 font-semibold text-sm">Rp 700.000 (8.02%)</p>
            </span>
            <p className="text-end text-xs text-gray-500 mt-1">1 TahunTerakhir</p>
          </span>
        </section>
        <section className="mt-5 w-full overflow-auto">
          <ChartQuotaUsage />
        </section>
      </div>
      <div className="flex gap-2 ml-7 mt-4 h-fit">
        <section className="border-2 w-3/5 p-3 overflow-x-auto">
          <span className="flex justify-between">
            <h1 className="text-lg font-bold">Grafik Keaktifan Cabang Tahun 2023</h1>
            <MenuDropdown />
          </span>
          <p className="text-sm text-gray-500">Data Periode Tahun 2023</p>
          <span className="mt-4">
            <ChartBranchActivity />
          </span>
        </section>
        <section className="border-2 w-2/5 p-3">
          <span className="flex justify-between">
            <h1 className="text-lg font-bold">Grafik Pengeluaran</h1>
            <MenuDropdown />
          </span>
          <span className="flex justify-between mt-2">
            <p className="text-sm text-gray-500">Data Periode Tahun 2023</p>
            <span className="">
              <span className="flex items-center gap-2">
                <IconChartDown />
                <p className="text-error-500 font-semibold text-sm">3112 (-12.23%)</p>
              </span>
              <p className="text-end text-xs text-gray-500 mt-1">1 TahunTerakhir</p>
            </span>
          </span>
          <ChartExpenditure />
        </section>
      </div>
    </>
  );
};

export default ChartQuotaModules;
