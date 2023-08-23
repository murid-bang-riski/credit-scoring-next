'use client';
import Link from 'next/link';
import { HistoryCardCarousel } from './history-card-carousel';
import { ChartCard } from './chart-card';
import { RequestChart } from './request-chart';
import { ScoreChart } from './score-chart';

export const HomeModule = () => {
  return (
    <>
      <HistoryCardCarousel />
      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard title="RIWAYAT PERMINTAAN" chart={<RequestChart />} />
        <ChartCard title="RIWAYAT NILAI SKOR" chart={<ScoreChart />} />
      </div>
    </>
  );
};