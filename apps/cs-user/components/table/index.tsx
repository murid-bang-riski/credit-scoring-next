import React, { ReactNode, useState,ReactElement } from 'react';

interface TableColumn {
    header: string;
    colspan?: number;
    className?: string;
    key?: string;
    hasSorting?: boolean;
    onSort?: () => void;
  }
  
  interface SubTableColumn {
    subHeader: string;
    colspan?: number;
    className?: string;
    key?: string;
    hasSorting?: boolean;
    onSort?: () => void;
  }
  
  interface TableProps {
    columns: TableColumn[];
    subTableColumns?: SubTableColumn[]; // Define sub-table columns
    children: ReactNode;
    classHead: string;
    classBody: string;
    hasSubTables?: boolean;
  }

export const ReusableTable: React.FC<TableProps> = ({ columns, children, classHead, classBody,hasSubTables,subTableColumns }) => {
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSort = (headerIndex: number) => {
        const header = columns[headerIndex].header;
        if (sortColumn === header) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(header);
            setSortDirection('asc'); // Change the default sort direction to 'asc'
        }
    };

    const sortedChildren = React.Children.toArray(children).sort((a, b) => {
        if (!React.isValidElement(a) || !React.isValidElement(b)) {
            return 0;
        }

        const cellsA = React.Children.toArray((a as ReactElement).props.children);
        const cellsB = React.Children.toArray((b as ReactElement).props.children);
        const cellIndex = columns.findIndex(column => column.header === sortColumn);

        if (cellIndex === -1 || !cellsA[cellIndex] || !cellsB[cellIndex]) {
            return 0;
        }

        const valueA = parseInt((cellsA[cellIndex] as ReactElement).props.children, 10); // Parse the number
        const valueB = parseInt((cellsB[cellIndex] as ReactElement).props.children, 10); // Parse the number

        // Directly compare numeric values
        return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
    });


    return (
        <table className="table-auto w-full text-[12px]">
            <thead className={`w-full ${classHead}`}>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} colSpan={column.colspan || 1} className={`px-4 py-4 text-[#A3A3A3] ${column.className}`}>
                            <div className="flex justify-center items-center gap-4">
                                {column.header}
                                {column.hasSorting && (
                                    <button onClick={() => handleSort(index)}>
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.47015 0.970306C3.76312 0.677338 4.2389 0.677338 4.53187 0.970306L7.53187 3.97031C7.7475 4.18593 7.81078 4.50703 7.69359 4.78827C7.5764 5.06952 7.30453 5.25234 6.99984 5.25234H0.99984C0.697496 5.25234 0.423277 5.06952 0.30609 4.78827C0.188902 4.50703 0.254527 4.18593 0.467809 3.97031L3.46781 0.970306H3.47015ZM3.47015 11.032L0.470152 8.03203C0.254527 7.8164 0.191246 7.49531 0.308434 7.21406C0.425621 6.93281 0.697496 6.74999 1.00218 6.74999H6.99984C7.30218 6.74999 7.5764 6.93281 7.69359 7.21406C7.81078 7.49531 7.74515 7.8164 7.53187 8.03203L4.53187 11.032C4.2389 11.325 3.76312 11.325 3.47015 11.032Z" fill="#737373"/>
</svg>

                                        </svg>
                                    </button>
                                )}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className={`${classBody}`}>
                {sortedChildren.map((child, rowIndex) => {
                    if (!React.isValidElement(child)) {
                        return null;
                    }

                    const cells = React.Children.toArray(child.props.children);

                    return (
                        <React.Fragment key={rowIndex}>
                        <tr>
                            {cells.map((cell, cellIndex) => {
                                if (!React.isValidElement(cell)) {
                                    return null;
                                }

                                return (
                                    <td
                                        key={cellIndex}
                                        colSpan={columns[cellIndex].colspan || 1}
                                        className={`${columns[cellIndex].className} border-b-2  px-4 py-1`}
                                    >
                                     
                                            {cell}
                                  
                                    </td>
                                );
                            })}
                        </tr>
                        {hasSubTables && subTableColumns && (
                <tr>
                  <td colSpan={columns.length} className="border-none px-4 py-2">
                       <table className="sub-table">
                      <thead>
                        <tr>
                          {subTableColumns.map((subColumn, index) => (
                            <th key={index}>{subColumn.subHeader}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
                    </React.Fragment>
                    );
                })}
            </tbody>
        </table>
    );
};
