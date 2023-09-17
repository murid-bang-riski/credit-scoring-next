import { Suspense } from "react";
import Sidebar from "../../components/sidebar";
import "../global.css";

export const metadata = {
  title: "Credit Scoring",
  description: "Credit Scoring USER",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#F6FBFA] flex ">
      <div className="w-[20%]">
        <Suspense fallback="loading">
          <Sidebar name="adoakdo" avatar="awodao" />
        </Suspense>
      </div>
      <div className="overflow-y-scroll px-5 w-full">
        <Suspense fallback="loading">{children}</Suspense>
      </div>
    </div>
  );
}
