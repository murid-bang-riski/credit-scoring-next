    import React, { ReactNode } from 'react';

    interface TableColumn {
    header: string;
    colspan?: number;
    }


    interface TableProps {
    columns: TableColumn[];
    children: ReactNode;
    classHead: string;
    classBody: string;

    }

    export const ReusableTable: React.FC<TableProps> = ({ columns, children,classHead,classBody }) => {
    return (
        <table className="table-auto w-full">
        <thead className={`w-full ${classHead}`}>
            <tr>
            {columns.map((column, index) => (
                <th key={index} colSpan={column.colspan || 1} className="border px-4 py-2">
                {column.header}
                </th>
            ))}
            </tr>
        </thead>
        <tbody className={`${classBody}`}>
            {React.Children.map(children, (child, rowIndex) => {
                if (!React.isValidElement(child)) {
                    return null;
                }
                const cells = React.Children.toArray(child.props.children);
                return (
                    <tr key={rowIndex}>
                        {cells.map((cell, cellIndex) => {
                            if (!React.isValidElement(cell)) {
                                return null;
                            }
                            return (
                                <td
                                    key={cellIndex}
                                    colSpan={columns[cellIndex].colspan || 1}
                                    className="border px-4 py-2"
                                >
                                    {cell}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
        </table>
    );
    };
