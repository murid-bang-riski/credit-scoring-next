import { addDays } from 'date-fns';
import { useState, useRef, FC } from 'react';
import { DateRangePicker } from 'react-date-range';
import { IconCalendar } from '@cs-user/components';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateTimeFormatOptions, formatDate } from '@cs-user/utils';

interface DateRange {
  startDate: Date;
  endDate: Date;
  key: string;
  color: string;
}

interface DateRangePickerProps {
  width: string;
  onRangeChange: (range: DateRange) => void;
}

export const DatePickerRange: FC<DateRangePickerProps> = ({
  onRangeChange,
  ...props
}) => {
  const [ranges, setRanges] = useState<DateRange>({
    startDate: new Date(Date.now()),
    endDate: addDays(new Date(), 7),
    key: 'selection',
    color: '#4AC1A2',
  });
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  const handleRangeChange = (item: any) => {
    setRanges(item.selection);
    onRangeChange(item.selection);
  };

  const options: DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div>
      <div
        className={`flex bg-white justify-center text-xs items-center rounded-md text-gray-400 border border-gray-200 p-4 gap-x-2 ${
          props.width ? props.width : 'w-auto'
        }`}
        onClick={() => setOpen((open) => !open)}
      >
        <span className=" flex flex-row items-center">
          Dari{' '}
          {formatDate({
            date: ranges?.startDate,
            options,
          })}
          <IconCalendar />
        </span>
        <span className="flex flex-row items-center">
          Sampai{' '}
          {formatDate({
            date: ranges?.endDate,
            options,
          })}
          <IconCalendar />
        </span>
      </div>

      <div ref={refOne}>
        {open && (
          <DateRangePicker
            onChange={handleRangeChange}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={[ranges]}
            direction="horizontal"
            className="absolute z-40 pt-2"
          />
        )}
      </div>
    </div>
  );
};
