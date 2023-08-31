// client.tsx

'use client';

import { ReusableTable } from 'components/table';
import React, { FC,useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import FakeDummyData from './MOCK_DATA.json'

export const Process: FC = () => {
  const itemsPerPage = 20; // Maksimal 20 data per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const query = useSearchParams();

  const columns = [
    { header: 'No',className:'w-[20px]' },
    { header: 'Tanggal Input',hasSorting: true,className:'w-[150px]' },
    { header: 'NIK' ,hasSorting:true,className:'w-[100px]'},
    { header: 'Nama',hasSorting: true },
    { header: 'No. Permintaan',hasSorting: true },
    { header: 'Tanggal Permintaan',hasSorting: true},
    { header: 'Kendala Proses' },
    { header: 'Hasil',className:'w-[150px]' },
  ];

  const totalPages = Math.ceil(FakeDummyData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const totalIndex = FakeDummyData.length
  const endIndex = Math.min(startIndex + itemsPerPage, FakeDummyData.length);
  const paginatedData = FakeDummyData.slice(startIndex, endIndex);
  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
    router.push(`/dashboard/request/?perPage=${itemsPerPage}&page=${newPage}`);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    const visiblePages = Math.min(10, totalPages);
    let firstPageInRange = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    const lastPageInRange = Math.min(
      firstPageInRange + visiblePages - 1,
      totalPages
    );

    if (lastPageInRange - firstPageInRange + 1 < visiblePages) {
      firstPageInRange = Math.max(lastPageInRange - visiblePages + 1, 1);
    }

    const pagination = [];

    if (firstPageInRange > 1) {
      pagination.push(
        <span key="ellipsis-start" className="pagination-ellipsis">
          ...
        </span>
      );
    }

    for (let i = firstPageInRange; i <= lastPageInRange; i++) {
      pagination.push(
        <button
          key={i}
          className={i === currentPage ? 'w-[40px]  h-[40px]  bg-[#4AC1A2] flex justify-center items-center rounded-md' : 'rounded-md w-[40px]  h-[40px]  border-2 border-[#BCBCBC]'}
          onClick={() => handleChangePage(i)}
        >
          {i}
        </button>
      );
    }

    if (lastPageInRange < totalPages) {
      pagination.push(
        <span key="ellipsis-end" className="pagination-ellipsis">
          ...
        </span>
      );
    }

    return pagination;
  };


  return (
    <div className='flex flex-col gap-7'>
      <ReusableTable
      classBody=''
      classHead='bg-[#F5F8FF]'
      hasSubTables={true}
      columns={columns}>
        {paginatedData.map((data, index) => (
           <tr key={index} className='py-2'>
           <td className='flex justify-center items-center'>{data.no}</td>
           <td className='flex justify-center items-center'>{data.tanggal_input}</td>
           <td className='flex justify-center items-center'>{data.NIK}</td>
           <td className='flex justify-start items-center'>{data.nama}</td>
           <td className='flex justify-center items-center'>{data.no_permintaan}</td>
           <td className='flex justify-center items-center'>{data.tanggal_permintaan}</td>
           <td className='flex justify-start items-center'>
            {data.kendala_proses === null ? '-' : data.kendala_proses}
        </td>
           <td className='w-[120px] text-white font-bold text-[12px]'>
            {data.hasil === 'GAGAL' ? (
              <button className='w-full py-2 rounded-md bg-[#EE2D24]' >{data.hasil}</button>
            ) : (
              <button className='w-full py-2 rounded-md bg-[#F59E0B]' >{data.hasil}</button>
            )}
          </td>
          
         </tr>
         
         ))}
      </ReusableTable>
      <div className='w-full justify-between flex items-center'>
      <span className='text-[12px] text-[#A3A3A3]'>
       Menampilkan {startIndex+1}-{endIndex} dari {totalIndex} Hasil
      </span>
      <span className='text-[12px] text-[#737373] gap-1 flex'>
      Untuk melihat riwayat permintaan sebelumnya
      <a className='text-[#4FA0CF]' href="#">click disini</a>
      </span>
      </div>
      <div className="w-full flex justify-center items-center gap-4">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {renderPagination()}
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
