"use client";
import { Button, IconBack, IconWarehouse } from "@components";
import { FC, ReactElement } from "react";
import TabComponent from "./tab";

const CurrentTotalQuotaModule: FC = (): ReactElement => {
  return (
    <>
      <Button
        type="button"
        href="/admin/chart-quota"
        className="flex flex-row items-center gap-[10px]"
      >
        <IconBack />
        <p className="text-primary-400 font-bold">Kembali</p>
      </Button>
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
