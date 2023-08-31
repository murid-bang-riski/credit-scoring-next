import { DatePickerRange, IconPlus, Search } from '@cs-user/components';
import Link from 'next/link';
import { useState } from 'react';

export const UserModule = () => {
  const [option, setOption] = useState({
    date_from: '',
    page: '',
    per_page: '',
    search: '',
  });

  const [deb, setDeb] = useState('');

  // const { setFilterAction } =
  const handleRangeChange = (data: any) => {
    const startDate = new Date(data.startDate).toISOString();
    const endDate = new Date(data.endDate).toISOString();
    setOption((prev) => ({ ...prev, date_from: startDate, date_to: endDate }));
  };
  return (
    <div>
      <div className="grid grid-cols-3">
        <DatePickerRange
          width="10%"
          onRangeChange={(e) => handleRangeChange(e)}
        />
        <Search
          value={deb}
          onChange={(e) => setDeb(e.target.value)}
          placeholder="Search NIK & Nama"
        />{' '}
        <Link href={'/dashboard/user/add-data'}>
          <button
            type="button"
            className="px-5 py-2.5 text-sm font-medium inline-flex items-center border-primary-400 border-2 bg-white text-primary-500 rounded-lg text-center "
          >
            <IconPlus size={24} />
            <span className="pl-3">Tambah Data</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
