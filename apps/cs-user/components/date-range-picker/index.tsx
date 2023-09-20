import React, { useState, useRef, useCallback } from "react";

import { DateRangePicker } from "react-date-range";
import { Button, IconCalendar } from "@cs-user/components";
import { DateTimeFormatOptions, formatDate } from "@cs-user/utils";

import qs from "query-string";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { formatISO } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

export const DatePickerRange: React.FC<DateRangePickerProps> = ({ onRangeChange, ...props }) => {
  const [ranges, setRanges] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
    color: "#4AC1A2",
  });

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleRangeChange = (item: any) => {
    setRanges(item.selection);
    onRangeChange(item.selection);
  };

  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const onSubmit = useCallback(async () => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      page: 1,
    };

    if (ranges?.startDate) {
      updatedQuery.startDate = formatISO(ranges?.startDate);
    }

    if (ranges?.endDate) {
      updatedQuery.endDate = formatISO(ranges?.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: updatedQuery,
      },
      { skipNull: true },
    );

    setOpen(false);

    router.push(url);
  }, [ranges?.startDate, ranges?.endDate, params, router]);

  return (
    <div>
      <div
        className={`flex bg-white justify-center h-[40px] text-xs items-center text-gray-400 border border-gray-200 p-2 rounded-lg gap-x-2 ${
          props.width ? props.width : "w-auto"
        }`}
        onClick={() => setOpen((open) => !open)}
      >
        <span className=" flex flex-row items-center gap-x-2">
          Dari{" "}
          <span className="text-base pl-2">
            {" "}
            <IconCalendar />{" "}
          </span>{" "}
          {formatDate({
            date: ranges?.startDate,
            options,
          })}
        </span>{" "}
        <span className="flex flex-row items-center gap-x-2">
          Sampai{" "}
          <span className="text-base pl-2">
            {" "}
            <IconCalendar />{" "}
          </span>{" "}
          {formatDate({ date: ranges?.endDate, options })}
        </span>{" "}
      </div>

      <div ref={refOne}>
        {open && (
          <>
            <div className="absolute z-40 border-gray-100 rounded-md overflow-hidden">
              <DateRangePicker
                onChange={handleRangeChange}
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={[ranges]}
                direction="horizontal"
                className="pt-2 rounded-md border-b-2"
              />
              <div className="bg-white py-3 text-sm">
                <div className="flex flex-row justify-end px-4">
                  <Button
                    onClick={onSubmit}
                    className="text-white bg-primary-400 rounded-md py-[7px] px-8 font-semibold text-sm"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <div
              onClick={() => setOpen((open) => !open)}
              className="fixed inset-0 bg-black bg-opacity-25 z-10"
            ></div>
          </>
        )}
      </div>
    </div>
  );
};
