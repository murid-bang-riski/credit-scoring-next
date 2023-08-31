import { FC, ReactElement, Suspense, useState } from "react";

import { Button, Modal, TableComponent } from "@components";
import { formatDate } from "@utils";

import { TQuotaItem } from "../types";
import { useQuotaData } from "../hooks";

import { createColumnHelper } from "@tanstack/react-table";

const RequestQuotaTab: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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
          onClick={toggleModal}
          type="submit"
          className="bg-primary-400 text-white px-3 py-1 text-sm w-full rounded-md"
        >
          Lihat
        </Button>
      ),
    },
  ];

  return (
    <Suspense fallback="Loading...">
      <section className="py-10">
        <Modal isOpen={isOpen} toggleModal={toggleModal} />
        <TableComponent data={data} columns={columns} />
      </section>
    </Suspense>
  );
};

export default RequestQuotaTab;
