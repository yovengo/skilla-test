import { PropsWithChildren } from 'react';
import { TableBody, TableHeader } from '../index';
import { ICall, ITableColumns } from '../../Calls/interfaces';
import styles from './Table.module.css';

interface ITableProps extends PropsWithChildren {
  columns: ITableColumns<ICall>;
  data?: ICall[];
}

export const Table: React.FC<ITableProps> = ({ columns, data, children }) => (
  <table className={styles.table}>
    {children || (
      <>
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} />
      </>
    )}
  </table>
);
