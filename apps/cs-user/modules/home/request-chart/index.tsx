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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Agust',
  'Sept',
  'Oktob',
  'Nov',
  'Des',
];

const dataLine = {
  labels: labels,
  datasets: [
    {
      label: '',
      data: [100, 200, 220, 380, 430, 420, 400, 600, 780, 700, 850, 1000],
      borderColor: '#13837B',
      tension: 0.1,
      fill: true,
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, '#1B9984');
        gradient.addColorStop(1, '#B0DBD4');
        return gradient;
      },
      hoverBackgroundColor: '#3b83f67e',
      hoverBorderColor: '#3b83f652',
      pointRadius: 6,
      pointHoverRadius: 20,
      pointStyle: 'circle',
      pointBackgroundColor: 'white',
      borderWidth: 2,
    },
  ],
};

export const RequestChart = () => {
  return (
    <div>
      <div className="flex px-8 justify-end gap-4">
        <button className="border border-primary-500 rounded-full w-6 h-6 text-md">
          +
        </button>
        <button className="border border-primary-500 rounded-full w-6 text-md">
          -
        </button>
      </div>
      <div className="px-4 w-full py-8 flex justify-center">
        <div className="h-fit w-full mt-4 overflow-hidden ">
          <Line data={dataLine} />
        </div>
      </div>
    </div>
  );
};
