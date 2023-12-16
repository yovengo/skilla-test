import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { getDate } from '../utils/getDate';

interface ISearchParams {
  dateStart: string;
  setDateStart: (date: string) => void;
  dateEnd: string;
  setDateEnd: (date: string) => void;
  inOut: 0 | 1 | undefined;
  setInOut: (value: 0 | 1 | undefined) => void;
  sortBy: 'date' | 'duration' | undefined;
  setSortBy: (value: 'date' | 'duration' | undefined) => void;
  order: 'ASC' | 'DESC';
  setOrder: (value: 'ASC' | 'DESC') => void;
}

const todayDate = getDate.today();

const threeDaysAgo = getDate.threeDaysAgo();

const SearchParamsContext = createContext<ISearchParams>({
  dateStart: threeDaysAgo,
  setDateStart: () => {},
  dateEnd: todayDate,
  setDateEnd: () => {},
  inOut: undefined,
  setInOut: () => {},
  sortBy: 'date',
  setSortBy: () => {},
  order: 'ASC',
  setOrder: () => {},
});

export const useSearchParams = () => {
  return useContext(SearchParamsContext);
};

export const SearchParamsProvider = ({ children }: PropsWithChildren) => {
  const [dateStart, setDateStart] = useState<string>(threeDaysAgo);
  const [dateEnd, setDateEnd] = useState<string>(todayDate);
  const [inOut, setInOut] = useState<0 | 1>();
  const [sortBy, setSortBy] = useState<'date' | 'duration' | undefined>('date');
  const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');

  return (
    <SearchParamsContext.Provider
      value={{
        dateStart,
        setDateStart,
        dateEnd,
        setDateEnd,
        inOut,
        setInOut,
        sortBy,
        setSortBy,
        order,
        setOrder,
      }}
    >
      {children}
    </SearchParamsContext.Provider>
  );
};
