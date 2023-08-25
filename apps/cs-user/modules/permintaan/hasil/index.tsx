// client.tsx
import { ReusableTable } from 'components/table';
import React, { FC } from 'react';

export const Result: FC = () => {
  const columns = [
    { header: 'Header 1', colspan: 2 },
    { header: 'Header 2' },
    { header: 'Header 3' }
  ];

  return (
    <div>
      <h1>Result Page</h1>
      <ReusableTable
      classBody='ad'
      classHead=''
      columns={columns}>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
      </ReusableTable>
    </div>
  );
};
