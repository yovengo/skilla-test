import { CallsTable } from '../components/Calls';
import { useSearchCalls } from '../hooks/useSearchCalls';
import styles from './App.module.css';
import { useSearchParams } from '../hooks/useSearchParams';
import { Filters } from '../components/Filters/Filters/Filters';

function App() {
  const params = useSearchParams();
  const { dateStart, dateEnd, inOut, sortBy, order } = params;
  const { calls } = useSearchCalls({ dateStart, dateEnd, inOut, sortBy, order });

  return (
    <section className={styles.container}>
      <Filters />
      <CallsTable calls={calls?.results} />
    </section>
  );
}

export default App;
