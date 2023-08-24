"use client";
import { IconArrow, IconWarehouse } from "@components";
import Link from "next/link";
import { FC, ReactElement } from "react";
import TabComponent from "./tab";

const CurrentTotalQuotaModule: FC = (): ReactElement => {
  return (
    <>
      <Link
        href="/admin/chart-quota"
        className="flex flex-row items-center gap-[10px]"
        as="/admin/chart-quota"
      >
        <span className="rotate">
          <IconArrow color="#A3A3A3" />
        </span>
        <p className="text-primary-400 font-bold">Kembali</p>
      </Link>
      <section className="mt-[26px] ml-9">
        <span className="flex items-center gap-3 text-2xl font-semibold">
          <IconWarehouse />
          <p>Total Kuota Saat ini</p>
        </span>
        <TabComponent />
      </section>
    </>
  );
};

export default CurrentTotalQuotaModule;
