import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { useKantorData } from "../hooks";
import { TKantorItem } from "../types";
import { TableComponent } from "@components";
const Table = () => {
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
      <TableComponent data={data} columns={columns} thColor="bg-white" tbColor="bg-add3" />
    </>
  );
};

export default Table;
