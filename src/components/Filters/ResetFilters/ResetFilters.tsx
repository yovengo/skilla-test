import { useSearchParams } from '../../../hooks/useSearchParams';
import { useFilterParams } from '../../../hooks/useFilterParams';
import { getDate } from '../../../utils/getDate';
import { closeBtn } from '../../../assets/icons';
import styles from './ResetFilters.module.css';

export const ResetFilters = () => {
  const { inOut, setInOut, dateStart, setDateStart } = useSearchParams();
  const { setDatePickerSelected, setInOutSelected } = useFilterParams();

  const isFiltered = inOut || dateStart !== getDate.threeDaysAgo();

  if (isFiltered) {
    return (
      <div
        onClick={() => {
          setInOut(undefined);
          setDateStart(getDate.threeDaysAgo());
          setDatePickerSelected(0);
          setInOutSelected(undefined);
        }}
        className={styles.resetBtn}
      >
        <p className={styles.resetBtnText}>Сбросить фильтры</p>
        <img src={closeBtn} alt="close" />
      </div>
    );
  } else {
    return null;
  }
};
