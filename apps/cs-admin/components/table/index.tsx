import { FC, ReactElement, useCallback, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { PaginationTable } from "./pagination";

interface ITableProps {
  data: any;
  columns: any;
  pagination?: boolean;
  center?: boolean;
  thColor?: string;
  tbColor?: string;
  thClassName?: string;
  tbClassName?: string;
  paginationColor?: string;
  paginationIconColor?: string;
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
  paginationColor = "bg-primary-400",
  paginationIconColor = "#4AC1A2",
}): ReactElement => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

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
          <PaginationTable
            data={data}
            table={table}
            paginationColor={paginationColor}
            paginationIconColor={paginationIconColor}
          />
        </>
      )}
    </div>
  );
};
