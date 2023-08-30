import { FC, Fragment, ReactElement, use, useEffect, useMemo, useState } from "react";
import { useQuotaData } from "../hooks";
import {
  Button,
  IconCheck,
  IconDropdown,
  IconEmptyState,
  IconClock,
  IconClose,
  IconWarning,
  IconArrow,
  IconBack,
  IconNext,
} from "@components";
import { TQuotaItem } from "../types";
import { formatDate } from "@utils";
import { Dialog, Transition } from "@headlessui/react";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { set } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";

const Table: FC = (): ReactElement => {
  const router = useRouter();
  const query = useSearchParams();

  const { getQuotaData } = useQuotaData();

  const [data, setData] = useState<TQuotaItem[]>([...getQuotaData]);

  const columnHelper = createColumnHelper<TQuotaItem>();

  const columns = [
    {
      id: "No",
      header: "No .",
      cell: (info: any) => <span>{info.row.index + 1}</span>,
    },
    columnHelper.accessor("request_number", {
      header: "No.Permintaan",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("created_at", {
      header: "Tanggal Request",
      cell: (info) => (
        <span className="text-gray-500">
          {formatDate({
            date: new Date(info.getValue()),
          })}
        </span>
      ),
    }),
    columnHelper.accessor("company", {
      header: "Nama Cabang",
      cell: (info) => info.getValue(),
    }),
    {
      id: "department",
      header: "Nama Departemen",
      cell: () => <span>Tech Departement</span>,
    },
    {
      id: "jumlah_produk",
      header: "Jumlah Produk",
      cell: (info: any) => <span className="font-bold">{info.row.index + 1}</span>,
    },
    columnHelper.accessor("quantity", {
      header: "Total Kuota",
      cell: (info) => <span className="text-gray-500">{info.getValue()}</span>,
    }),
    {
      id: "Action",
      header: "Action",
      cell: () => (
        <Button
          onClick={() => {}}
          type="submit"
          className="bg-primary-400 text-white px-3 py-1 text-sm w-full rounded-md"
        >
          Lihat
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  const setPageTable = (page: number) => {
    table.setPageIndex(page);
    router.push("/admin?page=" + Number(page + 1));
  };

  useEffect(() => {
    Number(query.get("page")) > table.getPageCount() && router.push("/admin?page=1");
    query.get("page") && table.setPageIndex(Number(query.get("page")) - 1);
  }, [query, table]);

  return (
    <div className="p-2 text-xs">
      <table className="overflow-x-scroll text-center text-xs w-full">
        <thead className="bg-primary-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="p-3" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i) => (
            <tr
              key={row.id}
              className={`
              ${i % 2 === 0 ? "bg-gray-100" : "bg-white"}
            `}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <span className="flex items-center gap-1">
        <p className="text-gray-400 font-bold">
          Menampilkan {table.getRowModel().rows.length} dari {data.length} hasil
        </p>
      </span>
      <div className="flex items-center gap-2 font-bold mt-4 justify-center">
        <Button
          className="border rounded px-3.5 py-3.5 text-primary-400 mr-9"
          onClick={() => setPageTable(table.getState().pagination.pageIndex - 1)}
          disabled={!table.getCanPreviousPage()}
          type="button"
        >
          <IconBack disabled={!table.getCanPreviousPage()} />
        </Button>
        {table.getPageOptions().map((pageIndex) => (
          <Button
            key={pageIndex + 1}
            className={`border rounded px-4 py-3 cursor-pointer 
            ${
              table.getState().pagination.pageIndex === pageIndex
                ? "bg-primary-400 text-white shadow-lg"
                : "text-gray-400 "
            }
              `}
            onClick={() => setPageTable(pageIndex)}
            type="button"
          >
            {pageIndex + 1}
          </Button>
        ))}
        <Button
          className="border rounded px-3.5 py-3.5 ml-9 group"
          onClick={() => setPageTable(table.getState().pagination.pageIndex + 1)}
          disabled={!table.getCanNextPage()}
          type="button"
        >
          <IconNext disabled={!table.getCanNextPage()} />
        </Button>
      </div>
    </div>
  );
};

export default Table;
