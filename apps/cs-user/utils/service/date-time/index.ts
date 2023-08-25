import { DateTimeFormatOptions } from '../../helper';

export const dateOption = { day: '2-digit', month: 'long', year: 'numeric' };
export const TimeOption = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

export const formatTime = (timeStamp: string) => {
  const date = new Date(timeStamp as string);

  const formatedDate = date
    .toLocaleDateString('de-DE', dateOption as DateTimeFormatOptions)
    .replace(/\./g, ' ');
  const formatedTime = date.toLocaleTimeString(
    'en-US',
    TimeOption as DateTimeFormatOptions
  );

  return { formatedDate, formatedTime };
};

export const formatElapsedTime = (value: number) => {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return { minutes, seconds };
};
