import { FC, useEffect, useState } from "react";
import { DataProcess } from "hooks/dashboard/request/hooks";
import { useSearchParams, useRouter } from "next/navigation";
import { TSRequestProcess, MetaData } from "types/dashboard";
import { ReusableTable, Paginations, Search } from "@cs-user/components";
import React from "react";

export const Process: FC = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<TSRequestProcess[]>([]);
  const [totalIndex, setTotalIndex] = useState<number>(0);
  const [nextActive, setNextActive] = useState(true); // Initially set to true since initially Next is active
  const [prevActive, setPrevActive] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<string>("_id");
  const router = useRouter();
  const { data: queryData } = DataProcess(perPage, search, sortColumn, sortOrder, page);

  useEffect(() => {
    if (queryData) {
      setData(queryData.data);
      setTotalIndex(queryData.meta.total);
    }
  }, [queryData]);

  console.log(data);

  const columns = [
    { header: "No", className: "w-[20px]", sort_by: "_id" },
    { header: "Tanggal Input", hasSorting: true, className: "w-[150px]" },
    { header: "NIK", hasSorting: true, className: "w-[100px]", sort_by: "nik" },
    { header: "Nama", hasSorting: true, className: "w-[150px]", sort_by: "name" },
    { header: "No. Permintaan", hasSorting: true },
    { header: "Tanggal Permintaan", hasSorting: true },
    { header: "Kendala Proses" },
    { header: "Hasil", className: "w-[150px]" },
  ];
  const handleSort = (header: string) => {
    if (sortColumn === header) {
      // If the same column is clicked, toggle the sorting order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // If a different column is clicked, set it as the new sorting column and default to ascending order
      setSortColumn(header);
      setSortOrder("asc");
    }
  };

  const totalPages = Math.ceil(totalIndex / perPage);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      router.push(`/dashboard/request/process?page=${page - 1}`);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      router.push(`/dashboard/request/process?page=${page + 1}`);
    }
  };

  const HandleUsePage = (page: number) => {
    setPage(page);
    router.push(`/dashboard/request/process?page=${page}`);
  };

  const start = (page - 1) * perPage;

  return (
    <div className="flex flex-col gap-7 mb-20 mt-10">
      <div className="flex justify-between items-center">
        <p className="text-[30px] font-bold">Permintaan hari ini</p>
        <div className="w-[350px]"></div>
      </div>
      <Search
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Nama, NIK, No. "
      />
      <ReusableTable
        classBody=""
        MainTableSort={handleSort}
        classHead="bg-[#F5F8FF]"
        columns={columns}
      >
        {data.map((data, index) => (
          <tr key={index} className="py-4 border-y-2">
            <td>
              <div className="flex justify-center items-center">{start + index + 1}</div>
            </td>
            <td>
              <div className="flex justify-center items-center">{data.requested_at}</div>
            </td>
            <td>
              <div className="flex justify-center items-center">{data.nik}</div>
            </td>
            <td>
              <div className="flex justify-center items-center">{data.name}</div>
            </td>
            <td>
              <div className="flex justify-center items-center">{data.request_number}</div>
            </td>
            <td>
              <div className="flex justify-center items-center">{data.requested_at}</div>
            </td>
            <td>
              <div className="flex justify-center items-center">
                {data.problem === null ? "-" : data.problem}
              </div>
            </td>
            <td className="w-[120px] ">
              <div className="flex justify-center items-center">
                {data.result === "GAGAL" ? (
                  <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#EE2D24]">
                    {data.result}
                  </button>
                ) : (
                  <button className="w-full py-2 text-white font-bold text-[12px] rounded-md bg-[#F59E0B]">
                    {data.result}
                  </button>
                )}
              </div>
            </td>
          </tr>
        ))}
      </ReusableTable>
      <div className="w-full justify-between flex items-center">
        <span className="text-[12px] text-[#A3A3A3]">
          Menampilkan {start + 1} - {Math.min(start + perPage, totalIndex)} dari {totalIndex} Hasil
        </span>
        <span className="text-[12px] text-[#737373] gap-1 flex">
          Untuk melihat riwayat permintaan sebelumnya
          <a className="text-[#4FA0CF]" href="#">
            click disini
          </a>
        </span>
      </div>
      <Paginations
        page={page}
        setPage={HandleUsePage}
        totalPages={totalPages} // Replace with the actual total number of pages
        prevActive={prevActive} // Replace with a boolean indicating previous button activity
        nextActive={nextActive} // Replace with a boolean indicating next button activity
        handlePreviousPage={handlePreviousPage} // Replace with the actual function
        handleNextPage={handleNextPage} // Replace with the actual function
      />
    </div>
  );
};
