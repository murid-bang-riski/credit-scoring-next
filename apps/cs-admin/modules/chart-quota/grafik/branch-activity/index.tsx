import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"];

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Jumlah Cabang Aktif",
      borderColor: "#053B49",
      borderWidth: 2,
      fill: false,
      data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 80, 90],
    },
    {
      type: "bar" as const,
      label: "Jumlah Cabang Terdaftar",
      backgroundColor: "#D0F9E3",
      data: [90, 60, 85, 90, 60, 60, 50, 100, 90, 90, 85, 100],
      borderColor: "white",
      borderWidth: 2,
    },
  ],
};

export const ChartBranchActivity = () => {
  return <Chart type="bar" data={data} options={options} />;
};
