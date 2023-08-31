import React, { useMemo } from "react";
import DATADUMMY from "./MOCK_DATA.json";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {TKantorItem } from "../types";
const Table = () => {
  const data = useMemo<TKantorItem[]>(() => DATADUMMY, []);

  const columnHelper = createColumnHelper<TKantorItem>();

  const columns = [
    columnHelper.accessor("kode_cabang", {
      header: "Kode Cabang",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("nama_cabang", {
      header: "Nama Cabang",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("alamat_cabang", {
      header: "Alamat Cabang",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("no_telpon", {
      header: "No Telpon",
      cell: (info) => info.renderValue(),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <>
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-400 uppercase border-b-2">
          {table.getHeaderGroups().map((hedaerGroup) => (
            <tr key={hedaerGroup.id}>
              {hedaerGroup.headers.map((header) => (
                <th key={header.id} className="px-6 py-3">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i) => (
            <tr key={row.id} className={i % 2 === 0 ? "bg-white" : "bg-add3"}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
