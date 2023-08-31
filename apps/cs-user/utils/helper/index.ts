export type DateTimeFormatOptions = {
  weekday?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit' | undefined;
  day?: 'numeric' | '2-digit' | undefined;
  time?: 'numeric';
  hour?: 'numeric';
  minute?: 'numeric';
};
const optionsValue: DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  time: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};
type FormatDate = {
  date: number | Date | undefined;
  options?: DateTimeFormatOptions;
};

export const formatDate = ({ date, options = optionsValue }: FormatDate) =>
  new Intl.DateTimeFormat('id-ID', options).format(date);
