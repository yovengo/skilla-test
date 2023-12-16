import { InOutFilter } from '../InOutFilter/InOutFilter';
import { DatePickerFiler } from '../DatePicker/DatePicker';
import { ResetFilters } from '../ResetFilters/ResetFilters';
import styles from './Filters.module.css';

export const Filters = () => (
  <div className={styles.filters}>
    <div className={styles.filtersLeftSide}>
      <InOutFilter />
      <ResetFilters />
    </div>
    <div>
      <DatePickerFiler />
    </div>
  </div>
);
