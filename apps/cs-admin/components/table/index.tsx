import { FC, ReactElement, useEffect } from "react";
import { Button, IconBack, IconNext } from "@components";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useRouter, useSearchParams } from "next/navigation";

interface ITableProps {
  data?: any;
  columns?: any;
  pagination?: boolean;
  center?: boolean;
  thColor?: string;
  tbColor?: string;
  thClassName?: string;
  tbClassName?: string;
}

export const TableComponent: FC<ITableProps> = ({
  data,
  columns,
  pagination = true,
  center = true,
  tbColor = "bg-gray-100",
  thColor = "bg-primary-100",
  thClassName = "p-4",
  tbClassName = "p-4",
}): ReactElement => {
  const router = useRouter();
  const query = useSearchParams();

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
      <table className={`overflow-x-scroll text-xs w-full ${center ? "text-center" : "text-left"}`}>
        <thead className={`${thColor}`}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className={`${thClassName}`} key={header.id}>
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
              ${i % 2 !== 0 ? `${tbColor}` : "bg-white"}
            `}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={`${tbClassName}`}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!!pagination && (
        <>
          <span className="flex items-center gap-1 mt-4">
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
        </>
      )}
    </div>
  );
};
