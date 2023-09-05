// client.tsx

"use client";

import { ReusableTable } from "components/table";
import { Search } from "components/search";
import React, { FC, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FakeDummyData from "./MOCK_DATA.json";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

export const Process: FC = () => {
  const itemsPerPage = 20; // Maksimal 20 data per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const [nextActive, setNextActive] = useState(true); // Initially set to true since initially Next is active
  const [prevActive, setPrevActive] = useState(false);
  const router = useRouter();
  const query = useSearchParams();
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setNextActive(true);
    setPrevActive(false);
    handleChangePage(currentPage + 1);
  };

  const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setNextActive(false);
    setPrevActive(true);
    handleChangePage(currentPage - 1);
  };

  const columns = [
    { header: "No", className: "w-[20px]" },
    { header: "Tanggal Input", hasSorting: true, className: "w-[150px]" },
    { header: "NIK", hasSorting: true, className: "w-[100px]" },
    { header: "Nama", hasSorting: true },
    { header: "No. Permintaan", hasSorting: true },
    { header: "Tanggal Permintaan", hasSorting: true },
    { header: "Kendala Proses" },
    { header: "Hasil", className: "w-[150px]" },
  ];

  const totalPages = Math.ceil(FakeDummyData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const totalIndex = FakeDummyData.length;
  const endIndex = Math.min(startIndex + itemsPerPage, FakeDummyData.length);
  const paginatedData = FakeDummyData.slice(startIndex, endIndex);
  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
    router.push(`/dashboard/request/?perPage=${itemsPerPage}&page=${newPage}`);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    const visiblePages = Math.min(5, totalPages);
    let firstPageInRange = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    const lastPageInRange = Math.min(firstPageInRange + visiblePages - 1, totalPages);

    if (lastPageInRange - firstPageInRange + 1 < visiblePages) {
      firstPageInRange = Math.max(lastPageInRange - visiblePages + 1, 1);
    }

    const pagination = [];

    if (firstPageInRange > 1) {
      pagination.push(
        <span
          key="ellipsis-start"
          className="text-[12px] text-[#C2C2C2] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC]"
        >
          ...
        </span>,
      );
    }

    for (let i = firstPageInRange; i <= lastPageInRange; i++) {
      pagination.push(
        <button
          key={i}
          className={
            i === currentPage
              ? "w-[30px]  h-[30px] text-white bg-[#4AC1A2] flex justify-center items-center rounded-sm text-[12px]"
              : " text-[12px] text-[#C2C2C2] rounded-sm shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC]"
          }
          onClick={() => handleChangePage(i)}
        >
          {i}
        </button>,
      );
    }

    if (lastPageInRange < totalPages) {
      pagination.push(
        <span
          key="ellipsis-end"
          className="text-[12px] text-[#C2C2C2] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC]"
        >
          ...
        </span>,
      );
    }

    return pagination;
  };

  const handleSort = (header: string) => {
    if (sortColumn === header) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(header);
      setSortDirection("asc");
    }
  };

  return (
    <div className="flex flex-col gap-7 mb-20 mt-10">
      <div className="flex justify-between items-center">
        <p className="text-[30px] font-bold">Permintaan hari ini</p>
        <div className="w-[350px]">
          <Search placeholder="Search NIK, Nama, No Permintaan" />
        </div>
      </div>
      <ReusableTable
        classBody=""
        MainTableSort={handleSort}
        classHead="bg-[#F5F8FF]"
        columns={columns}
      >
        {paginatedData.map((data, index) => (
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
                <div className="flex justify-center items-center">
                  {data.hasil === "GAGAL" ? (
                    <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#EE2D24]">
                      {data.hasil}
                    </button>
                  ) : (
                    <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#F59E0B]">
                      {data.hasil}
                    </button>
                  )}
                </div>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </ReusableTable>
      <div className="w-full justify-between flex items-center">
        <span className="text-[12px] text-[#A3A3A3]">
          Menampilkan {startIndex + 1}-{endIndex} dari {totalIndex} Hasil
        </span>
        <span className="text-[12px] text-[#737373] gap-1 flex">
          Untuk melihat riwayat permintaan sebelumnya
          <a className="text-[#4FA0CF]" href="#">
            click disini
          </a>
        </span>
      </div>
      <div className="w-full flex justify-center items-center gap-8">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="text-[12px] text-[#C2C2C2] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC]"
        >
          {prevActive ? <MdArrowBackIosNew color="#4AC1A2" /> : <MdArrowBackIosNew />}
        </button>
        <div className="gap-4 flex justify-center items-center">{renderPagination()}</div>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="text-[12px] text-[#C2C2C2] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC]"
        >
          {nextActive ? <MdOutlineArrowForwardIos color="#4AC1A2" /> : <MdOutlineArrowForwardIos />}
        </button>
      </div>
    </div>
  );
};
