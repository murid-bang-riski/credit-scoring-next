"use client";
import { Button, IConCashPayment, IconBack } from "@components";
import { Tab } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, ReactElement, Suspense, useEffect, useState, } from "react";
import JumlahPengeluaran from "./jumlah-pengeluaran";
import TotalPengeluaran from "./total-pengeluaran";

const TotalExpenditureCostsModule: FC = (): ReactElement => {
  const [active, setActive] = useState("jumlah-pengeluaran");
  const query = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (query.get("tab") === "jumlah-pengeluaran") {
      setActive("jumlah-pengeluaran");
    } else if (query.get("tab") === "total-pengeluaran") {
      setActive("total-pengeluaran");
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
        <section className="mt-6 ml-6">
          <span className="flex items-center gap-3 text-2xl font-semibold">
            <IConCashPayment />
            <p>Total Pengeluaran</p>
          </span>
          <Tab.Group>
            <Tab.List className="mt-4 flex flex-row w-fit h-fit gap lg:gap-x-3 md:gap-x-2 text-base font-semibold rounded-lg bg-neutral-100 px-3 py-2">
              <Tab
                className={`inline-block p-2 ${
                  active === "jumlah-pengeluaran" ? "text-neutral-800 bg-white rounded-lg" : null
                } text-neutral-400 text-xs md:text-base`}
                aria-current="page"
                onClick={() => {
                  setActive("jumlah-pengeluaran");
                  router.push("/admin/chart-quota/total-expenditure-costs?tab=jumlah-pengeluaran");
                }}
              >
                Jumlah Pengeluaran Keseluruhan
              </Tab>
              <Tab
                className={`inline-block p-2 ${
                  active === "total-pengeluaran" ? "text-neutral-800 bg-white rounded-lg" : null
                } text-neutral-400 text-xs md:text-base`}
                aria-current="page"
                onClick={() => {
                  setActive("total-pengeluaran");
                  router.push("admin/chart-quota/total-expenditure-costs?tab=total-pengeluaran");
                }}
              >
                Detail Pengeluaran Cabang
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-6">
              <Tab.Panel>
                <Suspense fallback={"loading..."}>
                  {active === "jumlah-pengeluaran" && <JumlahPengeluaran />}
                </Suspense>
              </Tab.Panel>
              <Tab.Panel>
                <Suspense fallback={"loading..."}>
                  {active === "total-pengeluaran" && <TotalPengeluaran />}
                </Suspense>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </div>
    </Suspense>
  );
};

export default TotalExpenditureCostsModule;
