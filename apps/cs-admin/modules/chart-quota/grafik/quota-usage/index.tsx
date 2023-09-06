import { FC, ReactElement } from "react";
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
  responsive: true,
  elements: {
    bar: {
      borderRadius: 4,
    },
  },
  scales: {
    y: {
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
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const data = {
  labels,
  datasets: [
    {
      label: "AI Identity Scoring",
      data: (function () {
        const data = [];
        for (let i = 0; i < labels.length; i++) {
          data.push(Math.floor(Math.random() * 50000));
        }
        return data;
      })(),
      backgroundColor: "#D97706",
    },
    {
      label: "AI Character Scoring",
      data: (function () {
        const data = [];
        for (let i = 0; i < labels.length; i++) {
          data.push(Math.floor(Math.random() * 50000));
        }
        return data;
      })(),
      backgroundColor: "#6756AE",
    },
    {
      label: "AI Capability Scoring",
      data: (function () {
        const data = [];
        for (let i = 0; i < labels.length; i++) {
          data.push(Math.floor(Math.random() * 50000));
        }
        return data;
      })(),
      backgroundColor: "#13837B",
    },
    {
      label: "AI Credit Scoring",
      data: (function () {
        const data = [];
        for (let i = 0; i < labels.length; i++) {
          data.push(Math.floor(Math.random() * 50000));
        }
        return data;
      })(),
      backgroundColor: "#0B1C38",
    },
  ],
};

export const ChartQuotaUsage: FC = (): ReactElement => {
  return <Bar data={data} options={options} width={1500} height={400} />;
};
