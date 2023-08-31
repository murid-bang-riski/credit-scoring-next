import React, { FC, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import dataDumy from "./MOCK_DATA.json";

type Root = Root2[];

interface Root2 {
  id: number;
  tanggal_pembelian: string;
  nama_cabang: string;
  ai_identity_scoring: number;
  ai_character_scoring: number;
  ai_capability_scoring: number;
  ai_credit_scoring: number;
}
const PemakaianKuota: FC = () => {
  const data = useMemo<Root>(() => dataDumy, []);

  /** @type — import("@tanstack/react-table").ColumnDef */
  const columns = [
    {
      header: "No",
      accessorKey: "id",
    },
    {
      header: "Tanggal Pembelian",
      accessorKey: "tanggal_pembelian",
    },
    {
      header: "Nama Cabang",
      accessorKey: "nama_cabang",
    },
    {
      header: "AI Identity Scoring",
      accessorKey: "ai_identity_scoring",
    },
    {
      header: "AI Character Scoring",
      accessorKey: "ai_character_scoring",
    },
    {
      header: "AI Capability Scoring",
      accessorKey: "ai_capability_scoring",
    },
    {
      header: "AI Credit Scoring",
      accessorKey: "ai_credit_scoring",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <>
      <div className="overflow-x-scroll lg:overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-primary-100">
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
              <tr key={row.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 text-center font-semibold">
                    {cell.column.id.startsWith("ai_") ? (
                      <>
                        <span className="text-error-500">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </span>
                        {"/5000"}
                      </>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="border p-2 mt-2 mx-2 rounded-xl" onClick={() => table.setPageIndex(0)}>
        First Page
      </button>
      <button
        className="border p-2 mt-2 mx-2 rounded-xl"
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        Previous Page
      </button>
      <button
        className="border p-2 mt-2 mx-2 rounded-xl"
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        Next Page
      </button>
      <button
        className="border p-2 mt-2 mx-2 rounded-xl"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      >
        Last Page
      </button>
    </>
  );
};

export default PemakaianKuota;
