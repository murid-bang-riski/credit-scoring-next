// client.tsx

"use client";

import { ReusableTable } from "components/table";
import { DatePickerRange, Search } from "@cs-user/components";
import React, { FC, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FakeDummyData from "./MOCK_DATA.json";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { DropdownQuotaPage } from "../dropdown-QuotaPage";
import OptionData from "./OptionData.json";

export const HistoryQuota: FC = () => {
  const itemsPerPage = 20; // Maksimal 20 data per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const [nextActive, setNextActive] = useState(true); // Initially set to true since initially Next is active
  const [prevActive, setPrevActive] = useState(false);
  const router = useRouter();
  const query = useSearchParams();
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [option, setOption] = useState({
    date_from: "",
    page: "",
    per_page: "",
    search: "",
  });

  const [deb, setDeb] = useState("");

  // const { setFilterAction } =
  const handleRangeChange = (data: any) => {
    const startDate = new Date(data.startDate).toISOString();
    const endDate = new Date(data.endDate).toISOString();
    setOption((prev) => ({ ...prev, date_from: startDate, date_to: endDate }));
  };

  const columns = [
    { header: "No", className: "w-[20px]" },
    { header: "Tanggal Request", className: "w-[150px]" },
    { header: "No Permintaan", className: "w-[100px]" },
    { header: "Cabang" },
    { header: "Departement" },
    { header: "Jenis Produk" },
    { header: "Jumlah Kouta" },
    { header: "Hasil", className: "w-[150px]" },
  ];

  const renderedHasil = (hasil: string) => {
    if (hasil === "BATAL") {
      return (
        <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#EE2D24]">
          {hasil}
        </button>
      );
    } else if (hasil === "BERHASIL") {
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

  return (
    <div className="flex flex-col gap-7 mb-20 mt-10">
      <p className="text-[30px] font-bold">Riwayat Alokasi Kuota</p>
      <div className="flex justify-between items-center">
        <div>
          <DatePickerRange width="10%" onRangeChange={(e: any) => handleRangeChange(e)} />
        </div>
        <div className="flex">
          <DropdownQuotaPage
            classname="w-[240px] bg-[#e5e5e5]"
            placeholder="Semua"
            data={OptionData}
          />
          <div className="w-[350px]">
            <Search placeholder="Search NIK, Nama, No Permintaan" />
          </div>
        </div>
      </div>
      <ReusableTable classBody="" classHead="bg-[#F5F8FF]" columns={columns}>
        {FakeDummyData.map((data, index) => (
          <React.Fragment key={index}>
            <tr className="py-4 border-y-2">
              <td>
                <div className="flex justify-center items-center">{data.no}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.tanggal_input}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.NIK}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.nama}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.no_permintaan}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.tanggal_permintaan}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">
                  {data.kendala_proses === null ? "-" : data.kendala_proses}
                </div>
              </td>
              <td className="w-[120px] ">
                <div className="flex justify-center items-center">{renderedHasil(data.hasil)}</div>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </ReusableTable>
    </div>
  );
};
