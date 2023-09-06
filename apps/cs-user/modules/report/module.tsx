import { useState } from "react";
import { ReportCustomer } from "./customer";
import { RequestReport } from "./request";
import { FeatureReport } from "./feature";
import React from "react";
import { Tab } from "@headlessui/react";

export const ModuleReport = () => {
  return (
    <div className=" my-5 bg-white overflow-hidden rounded-md">
      <Tab.Group>
        <Tab.List className={"flex w-full px-5 bg-white items-center justify-start gap-8"}>
          <Tab>
            {({ selected }) => (
              <button
                className={`font-semibold py-4 focus:outline-none ${
                  selected ? "border-b-2 border-primary-400 text-primary-400 " : "text-neutral-400"
                }`}
              >
                Laporan Customer
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button
                className={`font-semibold py-4 focus:outline-none ${
                  selected ? "border-b-2 border-primary-400 text-primary-400 " : "text-neutral-400"
                }`}
              >
                Laporan Permintaan
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button
                className={`font-semibold py-4 focus:outline-none ${
                  selected ? "border-b-2 border-primary-400 text-primary-400 " : "text-neutral-400"
                }`}
              >
                Laporan Fitur
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className={"px-10"}>
          <Tab.Panel>
            <ReportCustomer />
          </Tab.Panel>
          <Tab.Panel>
            <RequestReport />
          </Tab.Panel>
          <Tab.Panel>
            <FeatureReport />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
