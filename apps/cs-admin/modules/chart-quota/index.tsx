"use client";
import React, { FC, ReactElement } from "react";
import { dummy } from "./constants";
import CardCS from "./card";
import Image from "next/image";

const ChartQuotaModules: FC = (): ReactElement => {
  return (
    <section className="grid grid-cols-3 gap-8 mx-4">
      {dummy.map((item) => (
        <CardCS
          key={item.id}
          hasButton={true}
          buttonText="Lihat Semua"
          buttonHref="/list-company"
          buttonClassName={`flex mb-2 py-2 justify-center rounded-md font-bold  items-end my-2 ${item.classButton} w-full shadow-lg `}
          className="w-full m-3 min-h-[171px] absolute shadow-md px-4"
        >
          <div className="flex flex-row w-full h-full space-x-[10px] py-4">
            <Image
              src={item.icon}
              alt="image"
              width="0"
              height="0"
              priority={true}
              style={{ width: "70px", height: "auto" }}
            />
            <div className="flex-col w-full justify-center space-y-1">
              <p className="text-[14px] font-semibold text-neutral-600">{item.title}</p>
              <p className="text-black text-[28px]">500</p>
            </div>
          </div>
        </CardCS>
      ))}
    </section>
  );
};

export default ChartQuotaModules;
