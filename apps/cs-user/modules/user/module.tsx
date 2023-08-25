import { DatePickerRange } from '@cs-user/components';
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
      <DatePickerRange
        width="10%"
        onRangeChange={(e) => handleRangeChange(e)}
      />
    </div>
  );
};
