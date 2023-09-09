import Sidebar from "@/components/sidebar";
import "../global.css";
import { Suspense } from "react";

export const metadata = {
  title: "Credit Scoring Admin",
  description: "Credit Scoring Admin",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-row h-auto min-h-screen w-screen">
        <div className="">
          <Suspense fallback="loading">
            <Sidebar />
          </Suspense>
        </div>
        <div className="w-full lg:ml-[20%] ml-0 overflow-hidden p-4 max-screen-auto bg-white">
          <Suspense fallback="loading">{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
