import React from 'react';
import { Tab } from '@headlessui/react';
import { AlokasiKuota } from './alokasiKuota';

export const QuotaModule = () => {
  return (
    <div className="bg-white px-10 my-5 py-5 ">
      <Tab.Group>
        <Tab.List className={'grid grid-cols-2 w-2/5'}>
          <Tab>
            {({ selected }) => (
              <button
                className={`p-5 font-semibold ${
                  selected
                    ? 'border-b-2 border-primary-400 text-primary-400 '
                    : 'text-neutral-400'
                }`}
              >
                Alokasi Kuota
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button
                className={`p-5 font-semibold ${
                  selected
                    ? 'border-b-2 border-primary-400 text-primary-400 '
                    : 'text-neutral-400'
                }`}
              >
                Riwayat Alokasi Kuota
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className={'pt-10'}>
          <Tab.Panel>
            <AlokasiKuota />
          </Tab.Panel>
          <Tab.Panel>
            {/* <Process /> */}
            Riwayat Alokasi Kuota
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
