import { FC, ReactElement } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ScoreChart: FC = (): ReactElement => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [90, 60, 40, 30, 18],
        backgroundColor: [
          "rgb(19, 131, 123)",
          "rgb(74, 193, 162)",
          "rgb(253, 230, 138)",
          "rgb(231, 175, 82)",
          "rgb(137, 124, 192)",
        ],
        borderColor: [
          "rgb(19, 131, 123)",
          "rgb(74, 193, 162)",
          "rgb(253, 230, 138)",
          "rgb(231, 175, 82)",
          "rgb(137, 124, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    cutout: "70%",
    radius: "90%",
    responsive: true,
  };

  return (
    <div className="grid grid-cols-2 items-center">
      <div className="">
        <Doughnut data={data} options={options} />
      </div>
      <div className="w-full py-14">
        <div className="flex gap-3 my-2">
          <div className="bg-[#13837B] rounded-full w-5 h-5"></div>
          <p className="text-xs">A (Sangat Baik)</p>
        </div>
        <div className="flex gap-3 my-2">
          <div className="bg-primary-base rounded-full w-5 h-5"></div>
          <p className="text-xs">B (Baik)</p>
        </div>
        <div className="flex gap-3 my-2">
          <div className="bg-[#FDE68A] rounded-full w-5 h-5"></div>
          <p className="text-xs">C (Cukup Baik)</p>
        </div>
        <div className="flex gap-3 my-2">
          <div className="bg-[#E7AF52] rounded-full w-5 h-5"></div>
          <p className="text-xs">D (Buruk)</p>
        </div>
        <div className="flex gap-3 my-2">
          <div className="bg-[#897CC0] rounded-full w-5 h-5"></div>
          <p className="text-xs">E (Sangat Buruk)</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreChart;
