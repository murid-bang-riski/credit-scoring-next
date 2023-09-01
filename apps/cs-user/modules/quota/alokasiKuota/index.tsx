import React from 'react';
import { DropdownQuotaPage } from '../dropdown-QuotaPage';

export const AlokasiKuota = () => {
  const dataCabang = [
    { id: 1, name: 'Cabang 1' },
    { id: 2, name: 'Cabang 2' },
    { id: 3, name: 'Cabang 3' },
    { id: 4, name: 'Cabang 4' },
    { id: 5, name: 'Cabang 5' },
  ];

  const dataDepartment = [
    { id: 1, name: 'Department 1' },
    { id: 2, name: 'Department 2' },
    { id: 3, name: 'Department 3' },
    { id: 4, name: 'Department 4' },
    { id: 5, name: 'Department 5' },
  ];
  return (
    <div className="my-6 mx-14 w-full">
      <h1 className="font-bold text-2xl text-gray-600 pb-5">Alokasi Kuota</h1>
      <span className="font-semibold text-base text-gray-700">
        Nama Departemen
      </span>
      <div className="my-5 flex gap-5 ">
        <DropdownQuotaPage placeholder="Pilih Cabang" data={dataCabang} />
        <DropdownQuotaPage
          placeholder="Pilih Departemen"
          data={dataDepartment}
        />
      </div>
      <div className="">
        <p className="font-semibold text-base text-gray-700">Jenis Scoring</p>
        <p className="text-neutral-500">Pilih satu jenis produk</p>
      </div>
    </div>
  );
};
