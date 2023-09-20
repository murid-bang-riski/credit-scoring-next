"use client";
import { HistoryCardCarousel } from "./history-card-carousel";
import { ChartCard } from "./chart-card";
import { SalaryChart } from "./salary-chart";
import dynamic from "next/dynamic";
import { useGetHomeData } from "hooks/dashboard/home/hooks";
import { LoadingSpinner } from "components/loadingSpinner";

const LocationMapChart = dynamic(() => import("./location-chart"), {
  ssr: false,
});

const RequestChart = dynamic(() => import("./request-chart"), {
  ssr: false,
});

const AgeChart = dynamic(() => import("./age-chart"), {
  ssr: false,
});

const ScoreChart = dynamic(() => import("./score-chart"), {
  ssr: false,
});

export const HomeModule = () => {
  const { isLoading, data } = useGetHomeData();
  return (
    <>
      <HistoryCardCarousel data={data?.data.feature_history} isLoading={isLoading} />
      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard
          title="RIWAYAT PERMINTAAN"
          chart={<RequestChart data={data?.data.request_history_graph_data} />}
        />
        <ChartCard
          title="RIWAYAT NILAI SKOR"
          chart={<ScoreChart data={data?.data.score_history} />}
        />
        <ChartCard title="TRACK USIA" chart={<AgeChart data={data?.data.user_age} />} />
        <ChartCard title="TRACK LOKASI" chart={<LocationMapChart />} />
        <ChartCard title="TRACK PENDAPATAN" chart={<SalaryChart />} />
      </div>
    </>
  );
};
