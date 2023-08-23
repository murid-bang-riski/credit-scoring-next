import { FC, ReactElement } from 'react';
import Table from './table';

const RequestQuotaTab: FC = (): ReactElement => {
  return (
    <section className="py-10">
      <Table />
    </section>
  );
};

export default RequestQuotaTab;
