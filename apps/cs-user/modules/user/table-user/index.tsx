'use client';

import { ReusableTable } from '@cs-user/components';
import React, { FC, useState } from 'react';
import FakeDummyData from './MOCK_DATA.json';

export const UserTable: FC = () => {
  const itemsPerPage = 20; // Maksimal 20 data per halaman
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    { header: 'No', className: 'w-[20px] h-10' },
    { header: 'NIK', hasSorting: true, className: 'text-center' },
    { header: 'Nama', hasSorting: true },
    { header: 'Tanggal', hasSorting: true },
    { header: 'Berkas' },
    { header: 'Action' },
  ];
  const totalPages = Math.ceil(FakeDummyData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, FakeDummyData.length);
  const paginatedData = FakeDummyData.slice(startIndex, endIndex);
  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col gap-20">
      <ReusableTable
        classBody="bg-[#fff]"
        classHead="bg-[#F5F8FF]"
        hasSubTables={true}
        columns={columns}
      >
        {paginatedData.map((data, index) => (
          <tr key={index}>
            <td>{data.id}</td>
            <td>{data.nik}</td>
            <td>{data.nama}</td>
            <td>{data.tanggal}</td>
            <td>Lihat Detail</td>
            <td>Action</td>
          </tr>
        ))}
      </ReusableTable>
      <div className="pagination-controls">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
