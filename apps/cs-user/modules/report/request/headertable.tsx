import { TableColumn } from "components/table";
export const Columns = [
  { header: " ", className: "w-[20px]" },
  { header: "No", className: "w-[20px]" },
  { header: "Tanggal Input", className: "w-[150px]" },
  { header: "Jenis Permintaan", className: "w-[100px]" },
  { header: "Jumlah Customer", className: "w-[100px]" },
  { header: "No. Permintaan", className: "w-[100px]" },
  { header: "Tanggal Permintaan", className: "w-[100px]" },
  { header: "Tanggal Selesai", className: "w-[100px]" },
];
export const SubTable: TableColumn[] = [
  { header: "No", className: "w-[20px]" },
  { header: "No. Permintaan", className: "w-[150px]" },
  { header: "Tanggal Permintaan", className: "w-[150px]" },
  { header: "Jenis Permintaan", className: "w-[200px]" },
  { header: "Hasil", className: "w-[150px]" },
  { header: "Lihat Detail", className: "w-[80px]" },
  { header: "Semua", hasAllSelect: true, className: "w-[100px]" },
];
