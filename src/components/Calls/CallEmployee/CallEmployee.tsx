import { getRandomInt } from '../../../utils/getRandomInt';
import { avatar1, avatar2, avatar3, avatar4, avatar5 } from './img';
import { ICall } from '../interfaces';
import styles from './CallEmployee.module.css';

interface ICallEmployeeProps {
  call: ICall;
}

export const CallEmployee: React.FC<ICallEmployeeProps> = ({ call }) => {
  const randomInt = getRandomInt(1, 5);

  const renderRandomAvatar = () => {
    switch (randomInt) {
      case 1:
        return avatar1;
      case 2:
        return avatar2;
      case 3:
        return avatar3;
      case 4:
        return avatar4;
      case 5:
        return avatar5;
    }
  };

  return (
    <img
      src={renderRandomAvatar()}
      alt={`Сотрудник ${call.person_name}`}
      className={styles.avatar}
    />
  );
};
