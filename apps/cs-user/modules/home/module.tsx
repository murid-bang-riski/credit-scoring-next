"use client";
import Link from "next/link";
import { HistoryCardCarousel } from "./history-card-carousel";
import { ChartCard } from "./chart-card";
import { RequestChart } from "./request-chart";
import { ScoreChart } from "./score-chart";
// import { LocationMapChart } from './location-chart';
import { AgeChart } from "./age-chart";
import { SalaryChart } from "./salary-chart";
import dynamic from "next/dynamic";
import { useGetHomeData } from "hooks/dashboard/home/hooks";
import { getSession } from "next-auth/react";

const LocationMapChart = dynamic(() => import("./location-chart"), {
  ssr: false,
});

export const HomeModule = () => {
  const { isLoading, data } = useGetHomeData();

  return (
    <>
      <HistoryCardCarousel />
      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard
          title="RIWAYAT PERMINTAAN"
          chart={<RequestChart data={data?.data.request_history_graph_data} />}
        />
        <ChartCard title="RIWAYAT NILAI SKOR" chart={<ScoreChart />} />
        <ChartCard title="TRACK USIA" chart={<AgeChart />} />
        <ChartCard title="TRACK LOKASI" chart={<LocationMapChart />} />
        <ChartCard title="TRACK PENDAPATAN" chart={<SalaryChart />} />
      </div>
    </>
  );
};
