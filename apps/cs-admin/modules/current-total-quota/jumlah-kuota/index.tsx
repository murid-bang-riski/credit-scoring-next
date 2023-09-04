import { FC } from "react";
import MenuDropdown from "./dropdown";
import Image from "next/image";

const JumlahKuota: FC = () => {
  return (
    <div className=" w-full xl:w-5/6 h-fit flex min-h-max border-2">
      <section className="w-3/6 border-r-2">
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
        <span className="flex mx-8 py-10 justify-center">
          <span className="w-full">
            <p className="text-gray-600 font-bold">
              20.000.000 <span className="text-success-500 font-semibold">+8%</span>
            </p>
            <p className="w-2/3 text-xs text-gray-400 mt-1 font-semibold">
              AI Document Verification
            </p>
          </span>
          <span className="w-full border-x px-5">
            <p className="text-gray-600 font-bold">
              20.000.000 <span className="text-error-500 font-semibold">-8%</span>
            </p>
            <p className="w-2/3 text-xs text-gray-400 mt-1 font-semibold">AI Location & Movement</p>
          </span>
          <span className="pl-3 w-full">
            <p className="text-gray-600 font-bold">
              10.000.000 <span className="text-success-500 font-semibold">+8%</span>
            </p>
            <p className="w-2/3 text-xs text-gray-400 mt-1 font-semibold">AI Digital FootPrint</p>
          </span>
        </span>
      </section>
      <section className="w-3/6 grid grid-cols-2 gap-10 py-7 px-10">
        <span className="w-full p-5 mx-auto rounded-md hover:bg-warning-100 cursor-pointer">
          <p className="text-lg font-bold">
            50.000.000 <span className="text-base font-semibold text-success-500">+10%</span>
          </p>
          <p className="text-xs text-gray-500">Total Kuota Terpakai</p>
          <p className="text-xs font-semibold w-fit ml-0 px-2 py-1 mt-4 rounded-md bg-warning-200 text-warning-600">
            AI Identity Scoring
          </p>
        </span>
        <span className="w-full p-5 mx-auto rounded-md hover:bg-purple-100 cursor-pointer">
          <p className="text-lg font-bold">
            40.000.000 <span className="text-base font-semibold text-error-500">-10%</span>
          </p>
          <p className="text-xs text-gray-500">Total Kuota Terpakai</p>
          <p className="text-xs font-semibold w-fit ml-0 px-2 py-1 mt-4 rounded-md bg-purple-200 text-center text-purple-600">
            AI Character Scoring
          </p>
        </span>
        <span className="w-full p-5 mx-auto rounded-md hover:bg-primary-100 cursor-pointer">
          <p className="text-lg font-bold">
            80.000.000 <span className="text-base font-semibold text-success-500">+20%</span>
          </p>
          <p className="text-xs text-gray-500">Total Kuota Terpakai</p>
          <p className="text-xs font-semibold w-fit ml-0 px-2 py-1 mt-4 rounded-md bg-primary-200 text-center text-primary-600">
            AI Capability Scoring
          </p>
        </span>
        <span className="w-full p-5 mx-auto rounded-md hover:bg-secondary-100 cursor-pointer">
          <p className="text-lg font-bold">
            100.000.000 <span className="text-base font-semibold text-success-500">+12%</span>
          </p>
          <p className="text-xs text-gray-500">Total Kuota Terpakai</p>
          <p className="text-xs font-semibold w-fit ml-0 px-2 py-1 mt-4 rounded-md bg-secondary-200 text-center text-secondary-600">
            AI Credit Scoring
          </p>
        </span>
      </section>
    </div>
  );
};

export default JumlahKuota;
