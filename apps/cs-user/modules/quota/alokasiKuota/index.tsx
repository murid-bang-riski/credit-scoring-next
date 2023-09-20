import React from "react";
import { DropdownQuotaPage } from "../dropdown-QuotaPage";
import { Card } from "components/card";
import Image from "next/image";

export const AlokasiKuota = () => {
  const dataCabang = [
    { id: 1, name: "Cabang 1" },
    { id: 2, name: "Cabang 2" },
    { id: 3, name: "Cabang 3" },
    { id: 4, name: "Cabang 4" },
    { id: 5, name: "Cabang 5" },
  ];

  const dataDepartment = [
    { id: 1, name: "Department 1" },
    { id: 2, name: "Department 2" },
    { id: 3, name: "Department 3" },
    { id: 4, name: "Department 4" },
    { id: 5, name: "Department 5" },
  ];
  const DataCard = [
    {
      id: 1,
      icon: "/assets/dashboard/feature-icon/ai-automation.svg",
      title: "AI Automation",
      bgButton: "bg-purple-500",
      desc: 500,
    },
    {
      id: 2,

      icon: "/assets/dashboard/feature-icon/ai-document-verification.svg",
      title: "AI Document Verification",
      bgButton: "bg-primary-500",
      desc: 500,
    },
    {
      id: 3,

      icon: "/assets/dashboard/feature-icon/ai-location-movement.svg",
      title: "AI Location and Movement",
      bgButton: "bg-secondary-500",
      desc: 500,
    },
    {
      id: 4,
      icon: "/assets/dashboard/feature-icon/ai-capacity-earning-power.svg",
      title: "AI Capacity and Earning Power",
      bgButton: "bg-warning-300",
      desc: 500,
    },
  ];
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col gap-5 mx-4">
          <p className="text-[24px] font-boldu ">Alokasi Kouta</p>
          <p className="text-[16px]">Nama Departement</p>
          <div className="grid w-1/2 grid-cols-2 gap-5">
            <DropdownQuotaPage classname="w-[264px]" placeholder="Pilih Cabang" data={dataCabang} />
            <DropdownQuotaPage
              classname="w-[264px]"
              placeholder="Pilih Departemen"
              data={dataDepartment}
            />
          </div>
          <p className="text-[16px]">Jenis Scoring</p>
          <p className="text-[14px] text-[#A3A3A3]">Pilih Satu Jenis Produk</p>
          <div className="grid w-1/2 grid-cols-2 gap-5">
            {DataCard.map((x, i) => (
              <Card
                key={i}
                hasButton={false}
                hasNumber={true}
                numberCard={x.id}
                className="w-[264px] z-1 pl-5 min-h-[103px] justify-center items-center"
              >
                <div className="flex flex-row w-full h-full items-center justify-center gap-2">
                  <div className="flex justify-center items-center">
                    <Image
                      src={x.icon}
                      alt="icon"
                      className="flex justify-center items-center"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="flex-col w-full ">
                    <p className="text-sm font-semibold break-words pr-12">{x.title}</p>
                    <p className="text-neutral-400 font-normal text-xs">Data masuk ({x.desc})</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 my-5">
            <button className="w-full flex h-12 rounded-md justify-center items-center text-[16px] bg-[#4AC1A2] text-white">
              Confirm Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
