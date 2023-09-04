import { FC, ReactElement, useState } from 'react';

export const DropDownDashboard: FC = (): ReactElement => {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Semua');
  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = (value: string) => {
    setSelectedValue(value);
    setIsActive(false);
  };

  return (
    <div className="relative">
      <button
        id="category"
        className="bg-white border border-gray-300 text-gray-400 text-sm rounded-lg px-5 py-2.5 focus:ring-blue-500 focus:border-blue-500 text-center inline-flex items-center justify-between xl:w-[140px] lg:w-[120px] md:w-[140px] w-full"
        type="button"
        onClick={toggleDropdown}
      >
        {selectedValue}{' '}
        <svg
          className={`w-2.5 h-2.5 ml-2.5 ${
            isActive ? 'transform rotate-180' : ''
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isActive && (
        <div
          id="dropdownHover"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow mt-2 xl:w-[140px] lg:w-[120px] md:w-[140px] w-full"
        >
          <ul className="py-2 text-sm text-gray-700 ">
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 text-sm ${
                  selectedValue === 'Semua' ? 'bg-gray-100' : ''
                }`}
                onClick={() => handleItemClick('Semua')}
              >
                Semua
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 text-sm ${
                  selectedValue === 'AI Optimation' ? 'bg-gray-100' : ''
                }`}
                onClick={() => handleItemClick('AI Optimation')}
              >
                AI Optimation
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 text-sm ${
                  selectedValue === 'AI Document Verification'
                    ? 'bg-gray-100'
                    : ''
                }`}
                onClick={() => handleItemClick('AI Document Verification')}
              >
                AI Document Verification
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 text-sm ${
                  selectedValue === 'AI Condition Analysis' ? 'bg-gray-100' : ''
                }`}
                onClick={() => handleItemClick('AI Condition Analysis')}
              >
                AI Condition Analysis
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 text-sm ${
                  selectedValue === 'AI Location & Movement'
                    ? 'bg-gray-100'
                    : ''
                }`}
                onClick={() => handleItemClick('AI Location & Movement')}
              >
                AI Location & Movement
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
