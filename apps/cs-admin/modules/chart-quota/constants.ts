export interface IChartQuota {
  id: number;
  icon: string;
  title: string;
  desc: string;
  classButton: string;
}

export const dummy: IChartQuota[] = [
  {
    id: 1,
    icon: "/chart-quota/asset1.svg",
    title: "Total Perusahaan",
    desc: "500",
    classButton: "bg-secondary-100 hover:bg-secondary-100 bg-opacity-20 text-secondary-500",
  },
  {
    id: 2,
    icon: "/chart-quota/asset2.svg",
    title: "Total Alokasi Kuota",
    desc: "270.000.000",
    classButton: "bg-primary-100 hover:bg-primary-100 bg-opacity-20 text-primary-500",
  },
  {
    id: 3,
    icon: "/chart-quota/asset3.svg",
    title: "Total Lokasi Biaya",
    desc: "500.000.000",
    classButton: "bg-purple-100 hover:bg-purple-100 bg-opacity-20 text-purple-500",
  },
];
