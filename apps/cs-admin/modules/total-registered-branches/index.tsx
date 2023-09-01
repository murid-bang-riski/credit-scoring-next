"use client";
import { Button, IconBack, IconBuilding } from "@components";
import React, { FC } from "react";
import Table from "./table";

const TotalRegisteredBranchesModule: FC = () => {
  return (
    <>
      <Button type="button" href="/admin/chart-quota" className="flex flex-row items-center gap-3">
        <IconBack />
        <p className="text-primary-400 font-bold">Kembali</p>
      </Button>
      <div className="px-3">
        <section className="mt-5 flex justify-between items-center">
          <span className="w-fit flex items-center">
            <IconBuilding />
            <p className="text-2xl font-semibold">Daftar Kantor Cabang</p>
          </span>
          <span>INI SEARCHBAR</span>
        </section>
        <section className="overflow-x-auto mt-5 pl-2">
          <Table />
        </section>
      </div>
    </>
  );
};

export default TotalRegisteredBranchesModule;
