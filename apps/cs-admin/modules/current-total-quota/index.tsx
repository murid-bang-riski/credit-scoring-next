"use client";
import {
  Button,
  DateRangePickerComponent,
  IconArrow,
  IconBack,
  IconClose,
  IconFilter,
  IconWarehouse,
  Search,
} from "@components";
import { Dialog, Disclosure, Tab, Transition } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, Fragment, ReactElement, Suspense, useEffect, useState } from "react";
import JumlahKuota from "./jumlah-kuota";
import PemakaianKuota from "./pemakaian-kuota";

const CurrentTotalQuotaModule: FC = (): ReactElement => {
  const query = useSearchParams();
  const router = useRouter();
  const [active, setActive] = useState("jumlah-kuota");
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [search, setSearch] = useState("");

  const closeModal = () => {
    setFilterOpen(false);
  };
  const openModal = () => {
    setFilterOpen(true);
  };

  useEffect(() => {
    if (query.get("tab") === "jumlah-kuota") {
      setActive("jumlah-kuota");
    }
    if (query.get("tab") === "pemakaian-kuota") {
      setActive("pemakaian-kuota");
    }
  }, [query, router, active]);

  return (
    <Suspense fallback="loading...">
      <div className="flex flex-col overflow-hidden">
        <Button
          type="button"
          href="/admin/chart-quota"
          className="flex flex-row items-center gap-3"
        >
          <IconBack />
          <p className="text-primary-400 font-bold">Kembali</p>
        </Button>
        <section className="mt-6 ml-6 flex flex-col gap-4">
          <span className="flex items-center gap-3 text-2xl font-semibold">
            <IconWarehouse />
            <p>Total Kuota Saat ini</p>
          </span>
          <Tab.Group>
            <section className="flex flex-col xl:flex-row gap-4 xl:items-center xl:justify-between">
              {/* button grup */}
              <Tab.List className="flex flex-row w-fit h-fit gap lg:gap-x-3 md:gap-x-2 text-sm font-semibold rounded-lg bg-neutral-100 px-3 py-2">
                <Tab
                  className={`inline-block p-2 ${
                    active === "jumlah-kuota" ? "text-neutral-800 bg-white rounded-lg" : null
                  } text-neutral-400`}
                  aria-current="page"
                  onClick={() => {
                    setActive("jumlah-kuota");
                    router.push("/admin/chart-quota/current-total-quota?tab=jumlah-kuota");
                  }}
                >
                  Jumlah Kuota Keseluruhan
                </Tab>
                <Tab
                  className={`inline-block p-2 ${
                    active === "pemakaian-kuota" ? "text-neutral-800 bg-white rounded-lg" : null
                  } text-neutral-400`}
                  aria-current="page"
                  onClick={() => {
                    setActive("pemakaian-kuota");
                    router.push("admin/chart-quota/current-total-quota?tab=pemakaian-kuota");
                  }}
                >
                  Detail Pemakaian Kuota Cabang
                </Tab>
              </Tab.List>
              {/*commponet in tab pemakaian kuota*/}
              {active === "pemakaian-kuota" && (
                <div className="flex flex-row items-center gap-x-3">
                  <div>
                    <DateRangePickerComponent
                      onRangeChange={() => <>belum bang</>}
                      width="w-[300px]"
                    />
                  </div>
                  <div
                    onClick={openModal}
                    className="cursor-pointer flex items-center flex-row gap-x-3 border-2 border-neutral-300 rounded-md px-4 py-2 text-neutral-800 "
                  >
                    <IconFilter />
                    <span className="font-semibold text-sm">Filter</span>
                  </div>
                  <div className="w-full xl:w-72">
                    <Search
                      value={search}
                      placeholder="Search NIK, Nama, No Permintaan"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  {/* Modal Filter */}
                  <Transition appear show={isFilterOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>
                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="space-y-[9px] w-full max-w-[312px] transform overflow-hidden rounded-[4px] bg-white py-3 text-left align-middle shadow-xl transition-all">
                              <Dialog.Title className=" border-neutral-400 flex flex-col items-center">
                                <div className="flex w-full justify-end px-3">
                                  <div onClick={closeModal} className="hover:cursor-pointer ">
                                    <IconClose />
                                  </div>
                                </div>
                                <div className="flex flex-row w-full justify-between pt-3 px-9">
                                  <div className="font-bold text-base text-black">Filters</div>
                                  <div className="text-secondary-blue-400 font-semibold text-sm">
                                    Clear All
                                  </div>
                                </div>
                              </Dialog.Title>
                              <Disclosure>
                                {({ open }) => (
                                  <div className="mx-9">
                                    <Disclosure.Button className="pt-2 pb-3 border-b-2 broder-neutral-200 flex w-full justify-between">
                                      <span>Jenis Produk</span>
                                      <div
                                        className={`${
                                          open ? "rotate-180 transform" : ""
                                        } h-5 w-5 flex items-center p-1`}
                                      >
                                        <IconArrow />
                                      </div>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className=" pt-4 pb-2 text-xs">
                                      <ul className="w-full space-y-3">
                                        <li>
                                          <div className="flex gap-x-2 items-center">
                                            <input
                                              type="checkbox"
                                              value=""
                                              className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                            />
                                            <label className="w-full">AI Identitiy Scoring</label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex gap-x-2 items-center">
                                            <input
                                              type="checkbox"
                                              value=""
                                              className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                            />
                                            <label className="w-full">AI Identitiy Scoring</label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex gap-x-2 items-center">
                                            <input
                                              type="checkbox"
                                              value=""
                                              className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                            />
                                            <label className="w-full">AI Identitiy Scoring</label>
                                          </div>
                                        </li>
                                      </ul>
                                    </Disclosure.Panel>
                                  </div>
                                )}
                              </Disclosure>
                              <Disclosure>
                                {({ open }) => (
                                  <div className="mx-9">
                                    <Disclosure.Button className=" pb-3 border-b-2 broder-neutral-200 flex w-full justify-between">
                                      <span>Status Pembayaran</span>
                                      <div
                                        className={`${
                                          open ? "rotate-180 transform" : ""
                                        } h-5 w-5 flex items-center p-1`}
                                      >
                                        <IconArrow />
                                      </div>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className=" pt-4 pb-2 text-xs">
                                      <ul className="w-full space-y-3">
                                        <li>
                                          <div className="flex gap-x-2 items-center">
                                            <input
                                              type="checkbox"
                                              value=""
                                              className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                            />
                                            <label className="w-full">Gagal</label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex gap-x-2 items-center">
                                            <input
                                              type="checkbox"
                                              value=""
                                              className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                            />
                                            <label className="w-full">Berhasil</label>
                                          </div>
                                        </li>
                                      </ul>
                                    </Disclosure.Panel>
                                  </div>
                                )}
                              </Disclosure>
                              <Disclosure>
                                {({ open }) => (
                                  <div className="mx-9">
                                    <Disclosure.Button className=" pb-3 border-b-2 broder-neutral-200 flex w-full justify-between">
                                      <span>Jumlah Kuota</span>
                                      <div
                                        className={`${
                                          open ? "rotate-180 transform" : ""
                                        } h-5 w-5 flex items-center p-1`}
                                      >
                                        <IconArrow />
                                      </div>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className=" pt-4 pb-2 text-xs">
                                      <ul className="w-full space-y-3">
                                        <li>
                                          <div className="flex gap-x-2 items-center">
                                            <input
                                              type="checkbox"
                                              value=""
                                              className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                            />
                                            <label className="w-full">1.000</label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex gap-x-2 items-center">
                                            <input
                                              type="checkbox"
                                              value=""
                                              className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                            />
                                            <label className="w-full">5.000</label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex gap-x-2 items-center">
                                            <input
                                              type="checkbox"
                                              value=""
                                              className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                            />
                                            <label className="w-full">10.000</label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex gap-x-2 items-center">
                                            <input
                                              type="checkbox"
                                              value=""
                                              className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                            />
                                            <label className="w-full">50.000</label>
                                          </div>
                                        </li>
                                      </ul>
                                    </Disclosure.Panel>
                                  </div>
                                )}
                              </Disclosure>
                              <div className="w-full flex justify-center pt-5">
                                <Button
                                  onClick={closeModal}
                                  type="submit"
                                  className="bg-primary-400 text-white rounded-md px-8 py-[6px]"
                                >
                                  Submit
                                </Button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                </div>
              )}
            </section>
            {/* content */}
            <Tab.Panels className="mt-5">
              <Suspense fallback={"loading..."}>
                {active === "jumlah-kuota" && <JumlahKuota />}
              </Suspense>
              <Suspense fallback={"loading..."}>
                {active === "pemakaian-kuota" && <PemakaianKuota />}
              </Suspense>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </div>
    </Suspense>
  );
};

export default CurrentTotalQuotaModule;
