import { FC } from "react";
import MenuDropdown from "./dropdown";
import Image from "next/image";

const JumlahKuota: FC = () => {
  return (
    <div className=" w-5/6 flex min-h-max border-2">
      <section className="w-3/5 border-r-2">
        <span className="flex p-5 justify-between border-b-2">
          <p className="text-warning-base font-bold">AI Identity Scoring </p>
          <MenuDropdown />
        </span>
        <span className="flex mt-5 ml-8 gap-4 items-center">
          <Image
            src="/chart-quota/current-total-quota/hp.svg"
            alt="gambar hp"
            width={0}
            height={0}
            style={{ width: "50px", height: "auto" }}
          />
          <span>
            <p className="text-2xl font-semibold mb-1">50.000.000</p>
            <p className="text-xs text-gray-400">Total Kuota Terpakai</p>
          </span>
          <p className="text-success-500 font-semibold">+12%</p>
        </span>
      </section>
      <section className="w-2/5">
        <p>nomor</p>
      </section>
    </div>
  );
};

export default JumlahKuota;
