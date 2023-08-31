import { FC, ReactElement } from 'react';
import { TChartCard } from './types';
import { DropDownDashboard, ChartFilter } from '@cs-user/components';

export const ChartCard: FC<TChartCard> = ({ title, chart }): ReactElement => {
  return (
    <section className="bg-white h-[500px] w-full rounded-md md:py-5 py-0 my-4">
      <h1 className="text-xl font-bold p-4">{title}</h1>
      <div className="flex justify-between py-3 px-4 md:flex-row flex-col md:space-y-0 space-y-4 ">
        <ChartFilter />
        <DropDownDashboard />
      </div>
      <div className="px-4">{chart}</div>
    </section>
  );
};
