"use client";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Chart,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
);
import { TRequestHistoryGraphDataItem } from "@cs-user/types";
import zoomPlugin from "chartjs-plugin-zoom";
import { useRef, RefObject } from "react";
import ChartZoom from "../chart-zoom";

Chart.register(zoomPlugin);
export const RequestChart = (data: any) => {
  const chartRef = useRef<Chart<"line", any[], string> | null>(null);
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agust",
    "Sept",
    "Oktob",
    "Nov",
    "Des",
  ];

  const countDataByMonth = (data: Array<TRequestHistoryGraphDataItem>) => {
    const currentYear = new Date().getFullYear();
    const monthCounts = Array(12).fill(0); // Initialize an array with 12 zeros for each month
    data?.map((item: any) => {
      const itemDate = new Date(item.requested_at); // Assuming you want to count by requested_at date
      if (itemDate.getFullYear() === currentYear) {
        const monthIndex = itemDate.getMonth();
        monthCounts[monthIndex]++;
      }
    });

    return monthCounts;
  };

  const monthCounts = countDataByMonth(data.data);
  // console.log(`Month Counts`, monthCounts);

  const dataLine = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: monthCounts,
        borderColor: "#13837B",
        // tension: 0.1,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "#1B9984");
          gradient.addColorStop(1, "#B0DBD4");
          return gradient;
        },
        hoverBackgroundColor: "#3b83f67e",
        hoverBorderColor: "#3b83f652",
        pointRadius: 6,
        pointHoverRadius: 20,
        pointStyle: "circle",
        pointBackgroundColor: "white",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
      },
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          mode: "x",
          speed: 5,
        },
      },
      pan: {
        enabled: true,
        mode: "x",
        speed: 5,
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      responsive: true,
    },
  };

  return (
    <div className="h-fit flex flex-col pt-2">
      <ChartZoom ref={chartRef} />

      <div className="px-4 w-full h-fit flex justify-center items-center">
        <div className="h-fit w-full mt-4 overflow-hidden relative">
          <Line
            data={dataLine}
            // width={"100%"}
            // height={"100px"}
            options={options as ChartOptions<"line">}
            ref={chartRef}
          />
        </div>
      </div>
    </div>
  );
};
export default RequestChart;
