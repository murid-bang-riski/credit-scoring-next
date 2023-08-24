import { Tab } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, Suspense, useEffect, useState } from "react";
import JumlahKuota from "./jumlah-kuota";

const TabComponent: FC = () => {
  const [active, setActive] = useState("jumlah-kuota");
  const query = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const tab = query.get("tab");
    if (tab) {
      setActive(tab);
    }
  }, [query]);

  return (
    <Tab.Group>
      <Tab.List className="mt-2 flex flex-row w-fit h-fit gap lg:gap-x-3 md:gap-x-2 text-base font-semibold rounded-lg bg-neutral-100 px-4 py-2">
        <Tab
          className={`inline-block p-2 ${
            active === "jumlah-kuota" ? "text-neutral-800 bg-white rounded-lg" : null
          } text-neutral-400 text-xs md:text-base px-4 py-2`}
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
          } text-neutral-400 text-xs md:text-base px-4 py-2`}
          aria-current="page"
          onClick={() => {
            setActive("pemakaian-kuota");
            router.push("admin/chart-quota/current-total-quota?tab=pemakaian-kuota");
          }}
        >
          Detail Pemakaian Kuota Cabang
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Suspense fallback={"loading..."}>
            {active === "jumlah-kuota" && <JumlahKuota />}
          </Suspense>
        </Tab.Panel>
        <Tab.Panel>
          <Suspense fallback={"loading..."}>
            {active === "pemakaian-kuota" && <p>pemakaian kuota</p>}
          </Suspense>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabComponent;
