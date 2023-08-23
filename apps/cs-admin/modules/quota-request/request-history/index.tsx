import { FC, ReactElement } from 'react';
import Table from './table';

const RequestHistoryTab: FC = (): ReactElement => {
  return (
    <section className="py-10">
      <Table />
    </section>
  );
};

export default RequestHistoryTab;
