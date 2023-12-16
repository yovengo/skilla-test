import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { useSearchParams } from '../../../hooks/useSearchParams';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { useFilterParams } from '../../../hooks/useFilterParams';
import { arrowDown, arrowUp } from '../../../assets/icons';
import styles from './InOutFilter.module.css';

interface IOptions {
  [key: string]: string;
}

const options: IOptions = {
  undefined: 'Все типы',
  '1': 'Входящие',
  '0': 'Исходящие',
};

export const InOutFilter = () => {
  const { setInOut } = useSearchParams();
  const { inOutSelected, setInOutSelected } = useFilterParams();

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setInOut(inOutSelected === ('undefined' as unknown as undefined) ? undefined : inOutSelected);
  }, [setInOut, inOutSelected]);

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setIsActive(false));

  const renderArrow = () => {
    return isActive ? arrowUp : arrowDown;
  };

  return (
    <div ref={menuRef}>
      <div className={cn(styles.menuBtn)} onClick={() => setIsActive(!isActive)}>
        <p className={cn(styles.menuBtnText, inOutSelected && styles.menuBtnActive)}>
          {options[inOutSelected!]}
        </p>
        <img src={renderArrow()} alt="arrow" />
      </div>
      {isActive && (
        <ul className={styles.menuContent}>
          {Object.keys(options)
            .reverse()
            .map((option) => (
              <li
                key={option}
                onClick={() => {
                  setInOutSelected(option as unknown as 0 | 1 | undefined);
                  setIsActive(false);
                }}
                className={cn(
                  styles.menuItem,
                  Number(option) === inOutSelected && styles.menuItemActive
                )}
              >
                {options[option]}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
