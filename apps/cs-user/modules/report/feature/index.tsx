// client.tsx

"use client";

import { ReusableTable, SubTable as SubTableComponent, TableColumn } from "components/table";
import React, { FC, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FakeDummyData from "../../permintaan/hasil/MOCK_DATA.json";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BiSolidCaretDownCircle } from "react-icons/bi";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { MdArrowBackIosNew } from "react-icons/md";
import { Search } from "components/search";
import OptionData from "../../permintaan/hasil/OptionData.json";

export const FeatureReport: FC = () => {
  const itemsPerPage = 20; // Maksimal 20 data per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const [nextActive, setNextActive] = useState(true); // Initially set to true since initially Next is active
  const [prevActive, setPrevActive] = useState(false);

  const router = useRouter();
  const query = useSearchParams();

  const columns = [
    { header: "No", className: "w-[80px]" },
    { header: "Nama Dokumen", className: "w-[270px]" },
    { header: "Berhasil", className: "w-[150px]" },
    { header: "Gagal", className: "w-[150px]" },
    { header: "Total", className: "w-[150px]" },
    { header: "Presentase Gagal", className: "w-[150px]" },
  ];
  const column2 = [
    { header: "No", className: "w-[80px]" },
    { header: "Nama Dokumen", className: "w-[270px]" },
    { header: "Individu", className: "w-[150px]" },
    { header: "Perusahaan", className: "w-[150px]" },
    { header: "Profesional", className: "w-[150px]" },
    { header: "Wiraswasta", className: "w-[150px]" },
  ];

  return (
    <div className="flex flex-col gap-7 mb-20 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-bold">Hasil Permintaan</h1>
        <div className="flex gap-5">
          <select name="" id="">
            <option selected>Semua</option>
            {OptionData.map((data, index) => (
              <option key={index}>{data.name}</option>
            ))}
          </select>
          <div className="w-[350px]">
            <Search placeholder="Search NIK, Nama, No Permintaan" />
          </div>
        </div>
      </div>
      <ReusableTable classBody="" classHead="bg-[#F5F8FF] text-[#1B9984]" columns={columns}>
        {FakeDummyData.map((data, index) => (
          <React.Fragment key={index}></React.Fragment>
        ))}
      </ReusableTable>
      <ReusableTable classBody="" classHead="bg-[#F5F8FF] text-[#1B9984]" columns={column2}>
        {FakeDummyData.map((data, index) => (
          <React.Fragment key={index}></React.Fragment>
        ))}
      </ReusableTable>
    </div>
  );
};
