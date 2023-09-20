import { useState } from "react";
import React from "react";
import { RequestAI } from "./permintaan";
import { Result } from "./hasil";
import { Process } from "./process";
import { Tab } from "@headlessui/react";
import { DataProcess } from "hooks/dashboard/request/hooks";

export const ModuleRequest = () => {
  const { data } = DataProcess(3, "", "", "asc", 4);

  return (
    <div className="bg-white px-10 my-5 py-5 ">
      <Tab.Group>
        <Tab.List className={"grid grid-cols-3 w-1/3"}>
          <Tab>
            {({ selected }) => (
              <button
                className={`font-semibold focus:outline-none ${
                  selected ? "border-b-2 border-primary-400 text-primary-400 " : "text-neutral-400"
                }`}
              >
                Permintaan
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button
                className={`font-semibold focus:outline-none ${
                  selected ? "border-b-2 border-primary-400 text-primary-400 " : "text-neutral-400"
                }`}
              >
                Proses
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button
                className={`font-semibold focus:outline-none ${
                  selected ? "border-b-2 border-primary-400 text-primary-400 " : "text-neutral-400"
                }`}
              >
                Hasil
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className={"pt-10"}>
          <Tab.Panel>
            <RequestAI />
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <Process />
          </Tab.Panel>
          <Tab.Panel>
            <Result />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
