import { Table } from '../../Table';
import {
  CallCaller,
  CallDuration,
  CallEmployee,
  CallGrade,
  CallSource,
  CallTime,
  CallType,
} from '../index';
import styles from './CallsTable.module.css';
import { ICall, ITableColumns } from '../interfaces';

const columns: ITableColumns<ICall> = {
  type: {
    name: 'Тип',
    component: (call) => <CallType call={call} />,
  },
  time: {
    path: 'date',
    name: 'Время',
    component: (call) => <CallTime call={call} />,
  },
  employee: {
    name: 'Сотрудник',
    component: (call) => <CallEmployee call={call} />,
  },
  caller: {
    name: 'Звонок',
    component: (call) => <CallCaller call={call} />,
  },
  source: {
    name: 'Источник',
    component: (call) => <CallSource call={call} />,
  },
  grade: {
    name: 'Оценка',
    component: () => <CallGrade />,
  },
  duration: {
    path: 'duration',
    name: 'Длительность',
    component: (call) => <CallDuration call={call} />,
  },
};

interface ICallsTableProps {
  calls?: ICall[];
}

export const CallsTable: React.FC<ICallsTableProps> = ({ calls }) => (
  <section className={styles.tableContainer}>
    <Table data={calls} columns={columns} />
  </section>
);
