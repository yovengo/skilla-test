import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface IFilterParams {
  datePickerSelected: number;
  setDatePickerSelected: React.Dispatch<React.SetStateAction<number>>;
  inOutSelected: 1 | 0 | undefined;
  setInOutSelected: (select: 1 | 0 | undefined) => void;
}

const FilterParamsContext = createContext<IFilterParams>({
  datePickerSelected: 0,
  setDatePickerSelected: () => {},
  inOutSelected: undefined,
  setInOutSelected: () => {},
});

export const useFilterParams = () => {
  return useContext(FilterParamsContext);
};

export const FilterParamsProvider = ({ children }: PropsWithChildren) => {
  const [datePickerSelected, setDatePickerSelected] = useState(0);
  const [inOutSelected, setInOutSelected] = useState<0 | 1 | undefined>(undefined);

  return (
    <FilterParamsContext.Provider
      value={{ datePickerSelected, setDatePickerSelected, inOutSelected, setInOutSelected }}
    >
      {children}
    </FilterParamsContext.Provider>
  );
};
