import { useGetQuotaRequest, useQuotaRequestData } from "@/hooks";
import { TQuotaRequestItem } from "@/types";
import { Button, Modal, TableComponent } from "@components";
import { createColumnHelper } from "@tanstack/react-table";
import { formatDate } from "@utils";
import { useSearchParams } from "next/navigation";
import { FC, ReactElement, Suspense, useEffect, useState } from "react";

const RequestQuotaTab: FC = (): ReactElement => {
  const params = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [tableData, setTableData] = useState<TQuotaRequestItem[]>([]);

  const { data } = useGetQuotaRequest();

  const columnHelper = createColumnHelper<TQuotaRequestItem>();

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

  useEffect(() => {
    if (data) {
      const res = data.data.financial_graph_data;
      setTableData(res);

      if (params.has("startDate") && params.has("endDate")) {
        const startFrom = params.get("startDate") as string;
        const endTo = params.get("endDate") as string;

        const filterDate = res.filter((item) => {
          return item.created_at >= startFrom && item.created_at <= endTo;
        });

        setTableData(filterDate);
      }
    }
  }, [data, params]);

  return (
    <Suspense fallback="Loading...">
      <section className="py-10">
        <Modal isOpen={isOpen} toggleModal={toggleModal} />
        <TableComponent data={tableData} columns={columns} />
      </section>
    </Suspense>
  );
};

export default RequestQuotaTab;
