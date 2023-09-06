import React, { FC, ReactElement } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderRadius: 5,
    },
  },
  responsive: true,
  scales: {
    x: {
      max: 50000,
      min: 0,
      ticks: {
        stepSize: 10000,
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "AI Credit Scoring",
  "AI Capability Scoring",
  "AI Character Scoring",
  "AI Identity  Scoring",
];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10000, 20000, 30000, 40000],
      backgroundColor: "#1B9984",
    },
  ],
};

export const ChartExpenditure: FC = (): ReactElement => {
  return <Bar options={options} data={data} />;
};
