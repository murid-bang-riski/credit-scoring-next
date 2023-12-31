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

export const AgeChart = (data: any): ReactElement => {
  const labels = ["21-30", "31-40", "41-50", "51-60", "< 60 Tahun"];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [650, 680, 780, 420, 200],
        backgroundColor: "rgba(208, 249, 227, 1)",
      },
      {
        label: "Dataset 2",
        data: [420, 820, 940, 400, 270],
        backgroundColor: "rgba(5, 59, 73, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default AgeChart;
