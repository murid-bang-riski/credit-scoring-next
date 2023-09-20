// client.tsx

"use client";

import { ReusableTable } from "components/table";
import { DatePickerRange, Search, Paginations, DateTimeRenderer } from "@cs-user/components";
import React, { FC, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { DropdownQuotaPage } from "../dropdown-QuotaPage";
import { TSQoutaHistory } from "types/dashboard";
import OptionData from "./OptionData.json";
import { QuotaHistory } from "hooks/dashboard/qouta/hooks";
export const HistoryQuota: FC = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<TSQoutaHistory[]>([]);
  const [dateTo, setDateTo] = useState<string>("");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [totalIndex, setTotalIndex] = useState<number>(0);
  const [nextActive, setNextActive] = useState(true); // Initially set to true since initially Next is active
  const [prevActive, setPrevActive] = useState(false);
  const router = useRouter();
  const { data: queryData } = QuotaHistory(perPage, page, search, dateFrom, dateTo);

  React.useEffect(() => {
    if (queryData) {
      setData(queryData.data);
      setTotalIndex(queryData.meta.total);
    }
  }, [queryData]);

  const handleRangeChange = (data: any) => {
    const startDate = new Date(data.startDate).toISOString();
    const endDate = new Date(data.endDate).toISOString();
    setDateFrom(startDate);
    setDateTo(endDate);
  };

  console.log(data);
  const columns = [
    { header: "No", className: "w-[20px]" },
    { header: "Tanggal Request", className: "w-[150px]" },
    { header: "No Permintaan", className: "w-[150px]" },
    { header: "Cabang" },
    { header: "Departement" },
    { header: "Jenis Produk" },
    { header: "Jumlah Kouta" },
    { header: "Hasil", className: "w-[150px]" },
  ];

  const renderedHasil = (hasil: string) => {
    if (hasil === "FAILED") {
      return (
        <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#EE2D24]">
          {hasil}
        </button>
      );
    } else if (hasil === "SUCESSFUL") {
      return (
        <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#54B435]">
          {hasil}
        </button>
      );
    } else {
      return (
        <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#3B8BDB]">
          {hasil}
        </button>
      );
    }
  };
  const start = (page - 1) * perPage;

  return (
    <div className="flex flex-col gap-7 mb-20 mt-10">
      <p className="text-[30px] font-bold">Riwayat Alokasi Kuota</p>
      <div className="flex justify-between items-center">
        <div className="h-[10px] flex justify-center items-center">
          <DatePickerRange onRangeChange={(e) => handleRangeChange(e)} width="w-auto" />
        </div>
        <div className="flex gap-5">
          <DropdownQuotaPage
            classname="w-[200px] bg-[#e5e5e5]"
            placeholder="Semua"
            data={OptionData}
          />
          <div className="w-[350px]">
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search NIK, Nama, No Permintaan"
            />
          </div>
        </div>
      </div>
      <ReusableTable classBody="" classHead="bg-[#F5F8FF]" columns={columns}>
        {data.map((data, index) => (
          <React.Fragment key={index}>
            <tr className="py-4 border-y-2">
              <td>
                <div className="flex justify-center items-center">{start + index + 1}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">
                  <DateTimeRenderer timestamp={data.created_at} />
                </div>
              </td>

              <td>
                <div className="flex justify-center items-center">{data.request_number}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.company}</div>
              </td>
              <td>
                <div className="flex justify-center items-center"> </div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.feature}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.quantity}</div>
              </td>

              <td className="w-[120px] ">
                <div className="flex justify-center items-center">{renderedHasil(data.status)}</div>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </ReusableTable>
    </div>
  );
};
