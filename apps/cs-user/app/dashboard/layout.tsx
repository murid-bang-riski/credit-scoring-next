import { Suspense } from "react";
import Sidebar from "../../components/sidebar";
import "../global.css";
import Loading from "./loading";

export const metadata = {
  title: "Credit Scoring",
  description: "Credit Scoring USER",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-screen h-screen overflow-hidden bg-[#F6FBFA] flex ">
        <div className="w-[20%]">
          <Sidebar name="adoakdo" avatar="awodao" />
        </div>
        <div className="overflow-y-scroll px-5 w-full">{children} </div>
      </div>
    </Suspense>
  );
}
