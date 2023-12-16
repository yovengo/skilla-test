import { useSearchParams } from '../../../hooks/useSearchParams';
import { arrowDown, arrowUp } from '../../../assets/icons';
import { ICall, ITableColumns } from '../../Calls/interfaces';
import styles from './TableHeader.module.css';

interface ITableHeaderProps {
  columns: ITableColumns<ICall>;
}

export const TableHeader: React.FC<ITableHeaderProps> = ({ columns }) => {
  const { order, sortBy, setSortBy, setOrder } = useSearchParams();

  const renderSortArrow = (currentPath: string): string => {
    return currentPath === 'ASC' ? arrowUp : arrowDown;
  };

  const handleChangeOrder = () => (order === 'ASC' ? 'DESC' : 'ASC');

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            className={styles.tableHeadCell}
            key={column}
            scope="col"
            onClick={
              columns[column].path
                ? () => {
                    setSortBy(columns[column].path);
                    setOrder(handleChangeOrder());
                  }
                : undefined
            }
          >
            <div
              className={`${styles.tableHeadCellText} ${
                columns[column].path && styles.tableHeadCellTextWithSort
              }`}
            >
              {columns[column].name}
              <div className={styles.sortArrowContainer}>
                {columns[column].path === sortBy && (
                  <img className={styles.sortArrow} src={renderSortArrow(order)} alt="sort-arrow" />
                )}
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};
