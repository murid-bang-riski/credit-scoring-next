import {
  IconTrash,
  IconEdit,
  IconNext,
  IconPrev,
  ReusableTable,
  Paginations,
} from "@cs-user/components";
import React, { FC, useEffect, useState } from "react";
import FakeDummyData from "./MOCK_DATA.json";
import Link from "next/link";
import { TUserDataResponse, TUserDataItem } from "@cs-user/types";
import { formatTime } from "@cs-user/utils";
import { useGetUserData } from "hooks/dashboard/user/hooks";
import { useRouter } from "next/navigation";

export const UserTable: FC = () => {
  const columns = [
    { header: "No", className: "w-[20px] h-10" },
    { header: "NIK", hasSorting: true, className: "text-center", sort_by: "nik" },
    { header: "Nama", hasSorting: true, sort_by: "name" },
    { header: "Tanggal", hasSorting: true, sort_by: "created_at" },
    { header: "Berkas" },
    { header: "Action" },
  ];

  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(20);
  const [search, setSearch] = useState<string>("");
  const [userData, setUserData] = useState<TUserDataItem[]>([]);
  const [totalIndex, setTotalIndex] = useState<number>(0);
  const [nextActive, setNextActive] = useState<boolean>(true);
  const [prevActive, setPrevActive] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<string>("_id");
  const router = useRouter();
  const { data: queryData } = useGetUserData(perPage, search, sortColumn, sortOrder, page);

  useEffect(() => {
    if (queryData && queryData.data) {
      setUserData(queryData.data);
      setTotalIndex(queryData.meta.total);
    }
  }, [queryData]);

  console.log(userData);

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
      router.push(`/dashboard/user?page=${page - 1}`);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      router.push(`/dashboard/user?page=${page + 1}`);
    }
  };

  const HandleUsePage = (page: number) => {
    setPage(page);
    router.push(`/dashboard/user?page=${page}`);
  };

  const start = (page - 1) * perPage;
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <ReusableTable
        classBody="bg-[#fff]"
        classHead="bg-[#F5F8FF] text-neutral-400 border-b"
        columns={columns}
        MainTableSort={handleSort}
      >
        {userData?.map((data, index) => {
          return (
            <tr key={index} className="border-b">
              <td className="text-center">
                <div className="flex justify-center items-center py-2">{data._id}</div>
              </td>
              <td>
                <div className="flex justify-center items-center py-2">{data.nik}</div>
              </td>
              <td>
                <div className="flex justify-center items-center py-2">{data.name}</div>
              </td>
              <td>
                <div className="flex justify-center items-center py-2">
                  {formatTime(data.created_at).formatedDate}
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-2 text-secondary-600 hover:underline">
                  <Link href={`dashboard/user/detail-user/${data._id}`}>Lihat Detail</Link>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-2 gap-3">
                  <Link href={`dashboard/user/edit-user/${data._id}`}>
                    <div className="rounded-full bg-neutral-200 p-1 cursor-pointer hover:bg-neutral-300">
                      <IconEdit size={18} color="#897CC0" />
                    </div>
                  </Link>
                  <div className="rounded-full bg-neutral-200 p-1 cursor-pointer hover:bg-neutral-300">
                    <IconTrash size={18} />
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </ReusableTable>
      <Paginations
        page={page}
        setPage={HandleUsePage}
        totalPages={totalPages}
        prevActive={prevActive}
        nextActive={nextActive}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};
