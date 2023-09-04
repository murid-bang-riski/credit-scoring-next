// client.tsx

'use client';

import { ReusableTable } from 'components/table';
import React, { FC,useState } from 'react';
import FakeDummyData from './MOCK_DATA.json'

export const Result: FC = () => {
  const itemsPerPage = 20; // Maksimal 20 data per halaman
  const [currentPage, setCurrentPage] = useState(1);


  const columns = [
    { header: 'No',className:'w-[20px]' },
    { header: 'Tanggal Input',hasSorting: true,className:'w-[150px]' },
    { header: 'NIK' ,},
    { header: 'Nama',hasSorting: true },
    { header: 'No. Permintaan',hasSorting: true },
    { header: 'Tanggal Permintaan',hasSorting: true},
    { header: 'Kendala Proses' },
    { header: 'Hasil' },
  ];
  const subColumn = [
    { subHeader: 'No',className:'w-[20px]' },
    { subHeader: 'Tanggal Input',hasSorting: true,className:'w-[150px]' },
    { subHeader: 'NIK' ,hasSorting: true,},
    { subHeader: 'Nama',hasSorting: true },
    { subHeader: 'No. Permintaan',hasSorting: true },
    { subHeader: 'Tanggal Permintaan',hasSorting: true},
    { subHeader: 'Kendala Proses' },
    { subHeader: 'Hasil' },
  ];
  const totalPages = Math.ceil(FakeDummyData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, FakeDummyData.length);
  const paginatedData = FakeDummyData.slice(startIndex, endIndex);
  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };


  
  return (
    <div className='flex flex-col gap-20'>
     
      <ReusableTable
      classBody='ad'
      classHead='bg-[#F5F8FF]'
      hasSubTables={true}
      subTableColumns={subColumn}
      columns={columns}>
        {paginatedData.map((data, index) => (
           <tr key={index}>
           <td>{data.no}</td>
           <td>{data.tanggal_input}</td>
           <td>{data.NIK}</td>
           <td>{data.nama}</td>
           <td>{data.no_permintaan}</td>
           <td>{data.tanggal_permintaan}</td>
           <td>{data.kendala_proses}</td>
           <td>
            {data.hasil === 'GAGAL' ? (
              <button style={{ backgroundColor: 'red' }}>{data.hasil}</button>
            ) : (
              <button style={{ backgroundColor: 'green' }}>{data.hasil}</button>
            )}
          </td>
          
         </tr>
         
         ))}
      </ReusableTable>
      <div className='pagination-controls'>
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
