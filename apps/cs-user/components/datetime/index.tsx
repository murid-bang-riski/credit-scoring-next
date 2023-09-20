export const DateTimeRenderer = ({ timestamp }: any) => {
  const dateObj = new Date(timestamp);

  // Mendapatkan tahun, bulan, dan tanggal
  const tahun = dateObj.getFullYear();
  const bulan = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // Penambahan +1 karena Januari dimulai dari 0
  const tanggal = dateObj.getDate().toString().padStart(2, "0");

  // Mendapatkan waktu dalam format jam:menit:detik
  const jam = dateObj.getHours().toString().padStart(2, "0");
  const menit = dateObj.getMinutes().toString().padStart(2, "0");
  const detik = dateObj.getSeconds().toString().padStart(2, "0");

  // Merender hasilnya
  const hasilRender = `${tanggal}/${bulan}/${tahun} ${jam}:${menit}:${detik}`;

  return <div>{hasilRender}</div>;
};
