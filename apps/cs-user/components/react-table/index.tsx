"use client";
import {
  createColumnHelper,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  ColumnDef,
  useReactTable,
} from "@tanstack/react-table";
import { useState, Fragment } from "react";

const data: Person[] = [
  {
    id: 1,
    firstName: "Antony",
    lastName: "Hilling",
    email: "ahilling0@bbb.org",
    gender: "Male",
    ipAddress: "118.24.49.0",
    virtualMachine: {
      id: "247a6b75-c0c2-4f99-863b-6b520b9f8742",
      name: "Pacocha Inc",
      model: "Viper",
    },
  },
  {
    id: 1,
    firstName: "Antony",
    lastName: "Hilling",
    email: "ahilling0@bbb.org",
    gender: "Male",
    ipAddress: "118.24.49.0",
    virtualMachine: {
      id: "247a6b75-c0c2-4f99-863b-6b520b9f8742",
      name: "Pacocha Inc",
      model: "Viper",
    },
  },
];

export type VM = {
  id: string;
  name: string;
  model: string;
};

export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: "Male" | "Female";
  ipAddress: string;
  virtualMachine: VM;
};

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.display({
    id: "expander",
    header: ({ table }) => (
      <button
        {...{
          onClick: table.getToggleAllRowsExpandedHandler(),
        }}
      >
        {table.getIsAllRowsExpanded() ? "👇" : "👉"}
      </button>
    ),
    cell: ({ row, getValue }) => (
      <button
        {...{
          onClick: () => row.toggleExpanded(),
          style: { cursor: "pointer" },
        }}
      >
        {row.getIsExpanded() ? "👇" : "👉"}
      </button>
    ),
  }),
  columnHelper.accessor("id", {
    header: () => <span>Id</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("gender", {
    header: () => "Gender",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("ipAddress", {
    header: "IP",
  }),
];

export function People() {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { expanded },
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Fragment key={row.id}>
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>

                {row.getIsExpanded() ? (
                  <tr key={`${row.original.virtualMachine.id}`}>
                    <td colSpan={4}>{row.original.virtualMachine.name}</td>
                  </tr>
                ) : null}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
