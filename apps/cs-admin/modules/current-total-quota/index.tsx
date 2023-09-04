"use client";
import { Button, IconBack, IconWarehouse } from "@components";
import { Tab } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, ReactElement, Suspense, useEffect, useState } from "react";
import JumlahKuota from "./jumlah-kuota";
import PemakaianKuota from "./pemakaian-kuota";

const CurrentTotalQuotaModule: FC = (): ReactElement => {
    const [active, setActive] = useState("jumlah-kuota");
  const query = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (query.get("tab") === "jumlah-kuota") {
      setActive("jumlah-kuota");
    } else if (query.get("tab") === "pemakaian-kuota") {
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
        <section className="mt-6 ml-6">
          <span className="flex items-center gap-3 text-2xl font-semibold">
            <IconWarehouse />
            <p>Total Kuota Saat ini</p>
          </span>
          <Tab.Group>
            <Tab.List className="mt-4 flex flex-row w-fit h-fit gap lg:gap-x-3 md:gap-x-2 text-base font-semibold rounded-lg bg-neutral-100 px-3 py-2">
              <Tab
                className={`inline-block p-2 ${active === "jumlah-kuota" ? "text-neutral-800 bg-white rounded-lg" : null
                  } text-neutral-400 text-xs md:text-base`}
                aria-current="page"
                onClick={() => {
                  setActive("jumlah-kuota");
                  router.push("/admin/chart-quota/current-total-quota?tab=jumlah-kuota");
                }}
              >
                Jumlah Kuota Keseluruhan
              </Tab>
              <Tab
                className={`inline-block p-2 ${active === "pemakaian-kuota" ? "text-neutral-800 bg-white rounded-lg" : null
                  } text-neutral-400 text-xs md:text-base`}
                aria-current="page"
                onClick={() => {
                  setActive("pemakaian-kuota");
                  router.push("admin/chart-quota/current-total-quota?tab=pemakaian-kuota");
                }}
              >
                Detail Pemakaian Kuota Cabang
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-6">
              <Tab.Panel>
                <Suspense fallback={"loading..."}>
                  {active === "jumlah-kuota" && <JumlahKuota />}
                </Suspense>
              </Tab.Panel>
              <Tab.Panel>
                <Suspense fallback={"loading..."}>
                  {active === "pemakaian-kuota" && <PemakaianKuota />}
                </Suspense>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </div>
    </Suspense>
  );
};

export default CurrentTotalQuotaModule;
