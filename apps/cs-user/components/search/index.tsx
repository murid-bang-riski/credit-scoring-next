import { FC, ReactElement } from 'react';
import { SearchProps } from './types';
import { IconSearch } from '../icons';

export const Search: FC<SearchProps> = ({
  onChange,
  value,
  placeholder,
  className,
}): ReactElement => {
  return (
    <div className={`${className} lg:px-1 items-center w-full`}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          <IconSearch />
        </div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};
