"use client";
import { Button, IconBack, IconWarehouse } from "@components";
import { FC, ReactElement } from "react";
import TabComponent from "./tab";

const CurrentTotalQuotaModule: FC = (): ReactElement => {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <Button
          type="button"
          href="/admin/chart-quota"
          className="flex flex-row items-center gap-3"
        >
          <IconBack />
          <p className="text-primary-400 font-bold">Kembali</p>
        </Button>
        <section className="mt-6 ml-6">
          <span className="flex items-center gap-3 text-2xl font-semibold">
            <IconWarehouse />
            <p>Total Kuota Saat ini</p>
          </span>
          <TabComponent />
        </section>
      </div>
    </>
  );
};

export default CurrentTotalQuotaModule;
