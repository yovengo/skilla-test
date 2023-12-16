import { ReactNode } from 'react';
import { get } from 'lodash';
import { ICall, ITableColumns } from '../../Calls/interfaces';
import styles from './TableBody.module.css';

interface ITableBodyProps {
  data?: ICall[];
  columns: ITableColumns<ICall>;
}

export const TableBody: React.FC<ITableBodyProps> = ({ data, columns }) => {
  const renderContent = (item: ICall, column: keyof ITableColumns<ICall>): ReactNode => {
    if (columns[column].component) {
      const component = columns[column].component;

      if (typeof component === 'function') {
        return component(item);
      }
      return component;
    }

    return get(item, columns[column].path as string) as ReactNode;
  };

  return (
    <tbody>
      {data?.map((item) => (
        <tr key={item.id} className={styles.tableBodyRow}>
          {Object.keys(columns).map((column) => (
            <td key={column} className={styles.tableBodyCell}>
              {renderContent(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
