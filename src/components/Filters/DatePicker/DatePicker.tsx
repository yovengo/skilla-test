import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import cn from 'classnames';
import { useSearchParams } from '../../../hooks/useSearchParams';
import { useFilterParams } from '../../../hooks/useFilterParams';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { getDate } from '../../../utils/getDate';
import { formatDate } from '../../../utils/formatDate';
import { ArrowLeft, ArrowRight, Calendar } from '../../../assets/icons';
import styles from './DatePicker.module.css';
import 'react-datepicker/dist/react-datepicker.css';

interface IDatesOptions {
  [key: number]: string;
}

const datesOptions: IDatesOptions = {
  0: '3 дня',
  1: 'Неделя',
  2: 'Месяц',
  3: 'Год',
};

export const DatePickerFiler: React.FC = () => {
  const { setDateStart, setDateEnd, dateEnd, dateStart } = useSearchParams();
  const { datePickerSelected, setDatePickerSelected } = useFilterParams();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    switch (datePickerSelected) {
      case 0:
        return setDateStart(getDate.threeDaysAgo());
      case 1:
        return setDateStart(getDate.weekAgo());
      case 2:
        return setDateStart(getDate.monthAgo());
      case 3:
        return setDateStart(getDate.yearAgo());
      default:
        return setDateStart(getDate.threeDaysAgo());
    }
  }, [datePickerSelected, setDateStart]);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    if (start) {
      setDateStart(formatDate.toString(start));
    }
    if (end) {
      setDateEnd(formatDate.toString(end));
    }
    setIsActive(false);
  };

  const handleCalendarOpen = () => {
    setIsCalendarOpen(!isCalendarOpen);
    setIsActive(true);
  };

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    setIsActive(false);
    setIsCalendarOpen(false);
  });

  return (
    <div className={styles.datePicker}>
      <div
        className={styles.icon}
        onClick={() => setDatePickerSelected((prev: number) => (prev > 0 ? prev - 1 : prev))}
      >
        <ArrowLeft />
      </div>
      <div ref={menuRef} className={styles.menuBtnContainer}>
        <div className={styles.icon} onClick={handleCalendarOpen}>
          <Calendar />
        </div>
        <div
          className={styles.menuBtn}
          onClick={() => {
            setIsActive(!isActive);
            if (isActive) {
              setIsCalendarOpen(false);
            }
          }}
        >
          <p className={styles.menuBtnText}>{datesOptions[datePickerSelected]}</p>
        </div>
        {isActive && (
          <ul className={styles.menuContent}>
            {Object.keys(datesOptions).map((option) => (
              <li
                className={cn(
                  styles.menuItem,
                  Number(option) === datePickerSelected && styles.menuItemActive
                )}
                key={option}
                onClick={() => {
                  setDatePickerSelected(Number(option));
                  setIsActive(false);
                }}
              >
                {datesOptions[option]}
              </li>
            ))}
            <li>
              <p className={styles.specifyDatesText}>Указать даты</p>
              <div className={styles.specifyDatesContainer}>
                <DatePicker
                  onChange={onChange}
                  startDate={formatDate.toDate(dateStart)}
                  endDate={formatDate.toDate(dateEnd)}
                  maxDate={new Date()}
                  open={isCalendarOpen}
                  selectsRange
                  wrapperClassName="datePicker"
                  dateFormat="dd-MM-yy"
                />
                <div className={styles.icon} onClick={handleCalendarOpen}>
                  <Calendar />
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
      <div
        className={styles.icon}
        onClick={() => setDatePickerSelected((prev) => (prev < 3 ? prev + 1 : prev))}
      >
        <ArrowRight />
      </div>
    </div>
  );
};
