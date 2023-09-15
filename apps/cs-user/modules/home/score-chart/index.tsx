import { FC, ReactElement } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { TScoreHistoryItem } from "@cs-user/types";
ChartJS.register(ArcElement, Tooltip, Legend);

export const ScoreChart = (data: any): ReactElement => {
  const countDataByScore = (data: Array<TScoreHistoryItem>) => {
    const score = Array(5).fill(0);
    data?.map((item: any) => {
      const itemScore = item.score;

      itemScore === "VERY GOOD"
        ? score[0]++
        : itemScore === "GOOD"
        ? score[1]++
        : itemScore === "AVERAGE"
        ? score[2]++
        : itemScore === "BAD"
        ? score[3]++
        : score[4]++;
    });

    return score;
  };

  const scoreData = countDataByScore(data.data);
  // console.log(`Score Counts`, scoreData);
  const ChartData = {
    labels: ["A (Sangat Baik)", "B (Baik)", "C (Cukup Baik)", "D (Buruk)", "E (Sangat Buruk)"],
    datasets: [
      {
        label: "",
        data: scoreData,
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
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="grid grid-cols-2 items-center">
      <div className="">
        <Doughnut data={ChartData} options={options} />
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
