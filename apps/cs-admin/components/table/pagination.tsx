import React, { FC, ReactElement, useEffect, useState } from "react";
import { Button, IconBack, IconNext } from "../ui";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { Table } from "@tanstack/react-table";

interface IPaginationProps {
  data: any;
  table: Table<unknown>;
  paginationColor: string;
  paginationIconColor: string;
}

export const PaginationTable: FC<IPaginationProps> = ({
  data,
  table,
  paginationColor,
  paginationIconColor,
}): ReactElement => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [middlePagination, setMiddlePagination] = useState<number[]>([]);

  let currentQuery = {};

  if (params) {
    currentQuery = queryString.parse(params.toString());
  }

  const setPageTable = (page: number) => {
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
  };

  useEffect(() => {
    if (params.has("page")) {
      const page = Number(params.get("page") as string);
      table.setPageIndex(page - 1);

      const totalPage = table.getPageCount();

      if (totalPage <= 5) {
        setMiddlePagination(table.getPageOptions().slice(1, totalPage - 1));
      } else if (page <= 4) {
        setMiddlePagination(table.getPageOptions().slice(1, 6));
      } else if (page >= totalPage - 3) {
        setMiddlePagination(table.getPageOptions().slice(totalPage - 6, totalPage - 1));
      } else {
        setMiddlePagination(table.getPageOptions().slice(page - 3, page + 2));
      }
    }
  }, [data, params]);

  return (
    <div className="flex items-center gap-2 font-bold mt-4 justify-center">
      <Button
        className="border rounded px-3.5 py-3.5 mr-9"
        onClick={() => setPageTable(table.getState().pagination.pageIndex - 1)}
        disabled={!table.getCanPreviousPage()}
        type="button"
      >
        <IconBack disabled={!table.getCanPreviousPage()} color={paginationIconColor} />
      </Button>
      <Button
        type="button"
        className={`border rounded px-4 py-3 cursor-pointer ${
          table.getState().pagination.pageIndex === 0
            ? `${paginationColor} text-white shadow-lg`
            : "text-gray-400 "
        }`}
        onClick={() => setPageTable(0)}
      >
        1
      </Button>
      {table.getState().pagination.pageIndex > 3 && table.getPageCount() > 7 && (
        <span className="text-gray-400 font-bold mx-3">...</span>
      )}
      {middlePagination.map((pageIndex: number) => (
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
      {table.getState().pagination.pageIndex < table.getPageCount() - 4 &&
        table.getPageCount() > 7 && <span className="text-gray-400 font-bold mx-3">...</span>}
      <Button
        type="button"
        className={`border rounded px-4 py-3 cursor-pointer ${
          table.getState().pagination.pageIndex === table.getPageCount() - 1
            ? `${paginationColor} text-white shadow-lg`
            : "text-gray-400 "
        }`}
        onClick={() => setPageTable(table.getPageCount() - 1)}
      >
        {table.getPageCount()}
      </Button>
      <Button
        className="border rounded px-3.5 py-3.5 ml-9 group"
        onClick={() => setPageTable(table.getState().pagination.pageIndex + 1)}
        disabled={!table.getCanNextPage()}
        type="button"
      >
        <IconNext disabled={!table.getCanNextPage()} color={paginationIconColor} />
      </Button>
    </div>
  );
};
