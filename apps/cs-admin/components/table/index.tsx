import { FC, ReactElement, useCallback, useEffect } from "react";
import { Button, IconBack, IconNext } from "@components";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

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
  //hexadecimal
  paginationIconColor?:string;
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
  const router = useRouter();
  const query = useSearchParams();
  const pathname = usePathname();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  let currentQuery = {};

  if (query) {
    currentQuery = queryString.parse(query.toString());
  }

  const setPageTable = useCallback(
    (page: number) => {
      const updatedQuery: any = {
        ...currentQuery,
        page: Number(page) + 1,
      };

      const url = queryString.stringifyUrl(
        {
          url: pathname,
          query: updatedQuery,
        },
        { skipNull: true },
      );

      router.push(url);

      table.setPageIndex(page);
    },
    [table, query, pathname, currentQuery, router],
  );

  const resetPage = useCallback(() => {
    table.setPageIndex(0);

    const updatedQuery: any = {
      ...currentQuery,
      page: 1,
    };

    const url = queryString.stringifyUrl(
      {
        url: pathname,
        query: updatedQuery,
      },
      { skipNull: true },
    );

    console.log(url);

    router.push(url);
  }, [table, query, pathname, currentQuery, router]);

  useEffect(() => {
    if (Number(query.get("page")) < 1 && Number(query.get("page")) > table.getPageCount()) {
      resetPage();
    }
  }, [table, query, router]);

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
              className="border rounded px-3.5 py-3.5 mr-9"
              onClick={() => setPageTable(table.getState().pagination.pageIndex - 1)}
              disabled={!table.getCanPreviousPage()}
              type="button"
            >
              <IconBack disabled={!table.getCanPreviousPage()} color={paginationIconColor}/>
            </Button>
            {table.getPageOptions().map((pageIndex) => (
              <Button
                key={pageIndex + 1}
                className={`border rounded px-4 py-3 cursor-pointer 
            ${
              table.getState().pagination.pageIndex === pageIndex
                ? `${paginationColor} text-white shadow-lg`
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
              <IconNext disabled={!table.getCanNextPage()} color={paginationIconColor} />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
