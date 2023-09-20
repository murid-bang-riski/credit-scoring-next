"use client";

import { IconTrash, IconEdit, IconNext, IconPrev, ReusableTable } from "@cs-user/components";
import React, { FC, useState } from "react";
import FakeDummyData from "./MOCK_DATA.json";
import Link from "next/link";

export const UserTable: FC = () => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [nextActive, setNextActive] = useState(true);
  const [prevActive, setPrevActive] = useState(false);
  const columns = [
    { header: "No", className: "w-[20px] h-10" },
    { header: "NIK", hasSorting: true, className: "text-center" },
    { header: "Nama", hasSorting: true },
    { header: "Tanggal", hasSorting: true },
    { header: "Berkas" },
    { header: "Action" },
  ];
  const totalPages = Math.ceil(FakeDummyData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, FakeDummyData.length);
  const paginatedData = FakeDummyData.slice(startIndex, endIndex);
  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };
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
              : " text-[12px] text-[#C2C2C2] rounded-sm shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC] hover:bg-neutral-200"
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
          className="text-[12px] text-[#C2C2C2] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC] hover:bg-neutral-200"
        >
          ...
        </span>,
      );
    }

    return pagination;
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <ReusableTable
        classBody="bg-[#fff]"
        classHead="bg-[#F5F8FF] text-neutral-400 border-b"
        columns={columns}
      >
        {paginatedData.map((data, index) => (
          <tr key={index} className="border-b">
            <td className="text-center">
              <div className="flex justify-center items-center py-2">{data.id}</div>
            </td>
            <td>
              <div className="flex justify-center items-center py-2">{data.nik}</div>
            </td>
            <td>
              <div className="flex justify-center items-center py-2">{data.nama}</div>
            </td>
            <td>
              <div className="flex justify-center items-center py-2">{data.tanggal}</div>
            </td>
            <td>
              <div className="flex justify-center items-center py-2 text-secondary-600 hover:underline">
                <Link href={`/user-detail/${data.id}`}>Lihat Detail</Link>
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center py-2 gap-3">
                <div className="rounded-full bg-neutral-200 p-1 cursor-pointer hover:bg-neutral-300">
                  <IconEdit size={18} color="#897CC0" />
                </div>
                <div className="rounded-full bg-neutral-200 p-1 cursor-pointer hover:bg-neutral-300">
                  <IconTrash size={18} />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </ReusableTable>
      <div className="pagination-controls">
        <div className="w-full flex justify-center items-center gap-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="text-[12px] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC] hover:bg-neutral-200"
          >
            {prevActive ? <IconPrev color="#4AC1A2" /> : <IconPrev />}
          </button>
          <div className="gap-4 flex justify-center items-center">{renderPagination()}</div>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="text-[12px] rounded-sm flex justify-center items-center shadow-md w-[30px]  h-[30px]  border-2 border-[#BCBCBC] hover:bg-neutral-200"
          >
            {nextActive ? <IconNext color="#4AC1A2" /> : <IconNext />}
          </button>
        </div>
      </div>
    </div>
  );
};
