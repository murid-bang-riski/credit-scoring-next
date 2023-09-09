import { DatePickerRange, IconPlus, Search } from "@cs-user/components";
import Link from "next/link";
import { useState } from "react";
import { UserTable } from "./table-user";

export const UserModule = () => {
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
  return (
    <div className="bg-white p-9">
      <div className="flex justify-between mb-8">
        <div>
          <DatePickerRange width="10%" onRangeChange={(e) => handleRangeChange(e)} />
        </div>
        <div className="flex justify-items-end gap-3">
          <Search
            value={deb}
            onChange={(e) => setDeb(e.target.value)}
            placeholder="Search NIK, Nama, dan No Permintaan"
            className="min-w-[350px]"
          />{" "}
          <Link href={"/dashboard/user/add-data"}>
            <button
              type="button"
              className="px-5 py-2.5 text-sm font-medium inline-flex items-center border-primary-400 border-2 bg-white text-primary-500 rounded-lg text-center"
            >
              <IconPlus size={24} />
              <span className="pl-2 min-w-[120px]">Tambah Data</span>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <UserTable />
      </div>
    </div>
  );
};
