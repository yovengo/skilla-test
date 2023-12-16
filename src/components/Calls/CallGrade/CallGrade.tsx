import cn from 'classnames';
import { getRandomInt } from '../../../utils/getRandomInt';
import styles from './CallGrade.module.css';

export const CallGrade = () => {
  const randomInt = getRandomInt(0, 4);

  switch (randomInt) {
    case 0:
      return null;
    case 1:
      return <div className={cn(styles.grade, styles.gradePerfect)}>Отлично</div>;
    case 2:
      return <div className={cn(styles.grade, styles.gradeGood)}>Хорошо</div>;
    case 3:
      return <div className={cn(styles.grade, styles.gradeBad)}>Плохо</div>;
    case 4:
      return <p className={styles.scriptNotUsed}>Скрипт не использован</p>;
    default:
      return null;
  }
};
