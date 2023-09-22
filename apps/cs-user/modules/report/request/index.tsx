// client.tsx

"use client";

import {
  ReusableTable,
  SubTable as SubTableComponent,
  // DateTimeRenderer,
  renderedHasil,
} from "components/table";
import React, { FC, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BiSolidCaretDownCircle } from "react-icons/bi";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { MdArrowBackIosNew } from "react-icons/md";
import { Search, DatePickerRange } from "@cs-user/components";
import OptionData from "../../permintaan/hasil/OptionData.json";
import { TSRequestReport } from "@cs-user/types";
import { Columns, SubTable } from "./headertable";
import { formatTime } from "@cs-user/utils";
type Props = {
  data: TSRequestReport[];
};
export const RequestReport: FC<Props> = ({ data }) => {
  const itemsPerPage = 20; // Maksimal 20 data per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const [nextActive, setNextActive] = useState(true); // Initially set to true since initially Next is active
  const [prevActive, setPrevActive] = useState(false);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [open, setOpen] = useState(false);
  const [openRowIndex, setOpenRowIndex] = useState<number | null>(null);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === 0) {
      // Select all rows
      const allIndexes = paginatedData.map((_, index) => index);
      setSelectedRows(allIndexes);
    } else {
      // Deselect all rows
      setSelectedRows([]);
    }
  };

  const toggleRowSelection = (rowIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      // Select the row
      setSelectedRows([...selectedRows, rowIndex]);
    } else {
      // Deselect the row
      setSelectedRows(selectedRows.filter((index) => index !== rowIndex));
    }
  };

  const toggleSubTable = (index: number) => {
    if (openRowIndex === index) {
      setOpen(!open);
      setOpenRowIndex(null); // Menutup baris yang terbuka
    } else {
      setOpenRowIndex(index); // Membuka baris yang diklik
      setOpen(!open);
    }
  };

  const handleSort = (header: string) => {
    if (sortColumn === header) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(header);
      setSortDirection("asc");
    }
  };

  const router = useRouter();
  const query = useSearchParams();

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

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const totalIndex = data.length;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const paginatedData = data.slice(startIndex, endIndex);
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

  return (
    <div className="flex flex-col gap-7 mb-20 mt-10">
      <div className="flex justify-between items-center">
        <DatePickerRange width="10%" onRangeChange={(e: any) => handleRangeChange(e)} />
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
      <ReusableTable
        classBody=""
        MainTableSort={handleSort}
        classHead="bg-[#F5F8FF]"
        columns={Columns}
      >
        {paginatedData.map((data, index) => (
          <React.Fragment key={index}>
            <tr className="py-4 border-y-2">
              <td>
                <button onClick={() => toggleSubTable(index)}>
                  {openRowIndex === index ? (
                    <BiSolidCaretDownCircle color="#1B9984" className="w-[20px] h-[20px]" />
                  ) : (
                    <BiSolidCaretRightCircle color="#1B9984" className="w-[20px] h-[20px]" />
                  )}
                </button>
              </td>
              <td>
                <div className="flex justify-center items-center">{index + 1}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">
                  {formatTime(data.requested_at).formatedDate}
                  {/* {DateTimeRenderer({ timestamp: data.requested_at })} */}
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.feature}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.total_user}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">{data.request_number}</div>
              </td>
              <td>
                <div className="flex justify-center items-center">
                  {formatTime(data.requested_at).formatedDate}
                  {/* {DateTimeRenderer({ timestamp: data.requested_at })} */}
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center">
                  {formatTime(data.requested_at).formatedDate}
                  {/* {DateTimeRenderer({ timestamp: data.finished_at })} */}
                </div>
              </td>
            </tr>
            {data.user_requests && data.user_requests.length > 0 && openRowIndex === index && (
              <tr>
                <td className="px-20 g" colSpan={Columns.length}>
                  <div className="w-[250px] my-2">
                    <Search
                      value={searchQuery}
                      onChange={handleSearchQueryChange}
                      placeholder="Search Nama, NIK, No. "
                    />
                  </div>
                  <SubTableComponent
                    classBody=""
                    columns={SubTable} // Mengirimkan arah pengurutan di subtable
                    SubTableShort={handleSort}
                    classHead="bg-[#F5F8FF] text-[#1B9984]"
                    SelectAll={toggleSelectAll}
                  >
                    {data.user_requests
                      .filter((item) =>
                        searchQuery
                          ? Object.values(item)
                              .join(" ")
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase())
                          : true,
                      )
                      .map((data, index) => (
                        <tr className="border-y-2" key={index}>
                          <td className="py-2 ">
                            <div className="flex justify-center items-center">{index + 1}</div>
                          </td>
                          <td className="py-2">
                            <div className="flex justify-center items-center">{data.nik}</div>
                          </td>
                          <td className="p-2">
                            <div className="flex justify-center items-center">
                              {formatTime(data.date_requested).formatedDate}
                              {/* {DateTimeRenderer({ timestamp: data.date_requested })} */}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="flex justify-center items-center">{data.name}</div>
                          </td>
                          <td className="p-2">
                            <div className="flex justify-center items-center">
                              {renderedHasil(data.result)}
                            </div>
                          </td>
                          <td className="w-[120px] p-2">
                            <div className="flex justify-center items-center">
                              <button className="px-4 py-1 bg-[#4AC1A2] text-[12px] font-bold text-white rounded-sm">
                                Lihat
                              </button>
                            </div>
                          </td>
                          <td className="py-2">
                            <div className="flex justify-center items-center">
                              <input
                                width={50}
                                height={50}
                                type="checkbox"
                                onChange={toggleRowSelection.bind(null, index)}
                                checked={selectedRows.includes(index)}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    <tr className="">
                      <td colSpan={8} className="py-2">
                        <div className="justify-end flex items-end px-10">
                          <button className="text-[18px] text-[#5E5E5E] border-2 w-[150px] border-[#E5E5E5] rounded-md h-[40px]">
                            Unduh
                          </button>
                        </div>
                      </td>
                    </tr>
                  </SubTableComponent>
                </td>
              </tr>
            )}
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
