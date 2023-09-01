import { useCuurenTotalQuota } from "@/hooks";
import { TCurrentTotalQuotaItem } from "@/types";
import { TableComponent } from "@components";
import { createColumnHelper } from "@tanstack/react-table";
import { FC, useState } from "react";

const PemakaianKuota: FC = () => {
  const { getCurrentTotalQuotaData } = useCuurenTotalQuota();
  const [data, setData] = useState<TCurrentTotalQuotaItem[]>([...getCurrentTotalQuotaData])

  const columnHelper = createColumnHelper<TCurrentTotalQuotaItem>();

  const columns = [
    columnHelper.accessor("id", {
      header: "No",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("tanggal_pembelian", {
      header: "Tanggal Pembelian",
      cell: (info) => <span className="text-gray-500">{info.getValue()}</span>,
    }),
    columnHelper.accessor("nama_cabang", {
      header: "Nama Cabang",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ai_identity_scoring", {
      header: "AI Identity Scoring",
      cell: (info) => (
        <p>
          <span className="text-error-500">{info.getValue()}</span> / 5000
        </p>
      ),
    }),
    columnHelper.accessor("ai_character_scoring", {
      header: "AI Character Scoring",
      cell: (info) => (
        <p>
          <span className="text-error-500">{info.getValue()}</span> / 5000
        </p>
      ),
    }),
    columnHelper.accessor("ai_capability_scoring", {
      header: "AI Capability Scoring",
      cell: (info) => (
        <p>
          <span className="text-error-500">{info.getValue()}</span> / 5000
        </p>
      ),
    }),
    columnHelper.accessor("ai_credit_scoring", {
      header: "AI Credit Scoring",
      cell: (info) => (
        <p>
          <span className="text-error-500">{info.getValue()}</span> / 5000
        </p>
      ),
    }),
  ];
  return (
    <>
      <TableComponent data={data} columns={columns} tbClassName="font-bold p-5" />
    </>
  );
};

export default PemakaianKuota;
