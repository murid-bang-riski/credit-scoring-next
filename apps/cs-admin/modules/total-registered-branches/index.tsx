"use client";
import { Button, IconBack, IconBuilding, TableComponent } from "@components";
import { createColumnHelper } from "@tanstack/react-table";
import { FC, useState } from "react";
import { useKantorData } from "./hooks";
import { TKantorItem } from "./types";

const TotalRegisteredBranchesModule: FC = () => {
  const { getKantorData } = useKantorData();
  const [data, setData] = useState<TKantorItem[]>([...getKantorData]);

  const columnHelper = createColumnHelper<TKantorItem>();

  const columns = [
    columnHelper.accessor("kode_cabang", {
      header: "Kode Cabang",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("nama_cabang", {
      header: "Nama Cabang",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("alamat_cabang", {
      header: "Alamat Cabang",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("no_telpon", {
      header: "No Telpon",
      cell: (info) => info.getValue(),
    }),
  ];

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
        <section className="overflow-x-auto mt-5">
          <TableComponent
            data={data}
            columns={columns}
            thColor="bg-secondary-100"
            center={false}
            thClassName=" p-4 border-b-2 font-bold"
            tbClassName="font-semibold p-4 border-b-2"
            paginationColor="bg-secondary-400"
            paginationIconColor="#6FB2D8"
          />
        </section>
      </div>
    </>
  );
};

export default TotalRegisteredBranchesModule;
