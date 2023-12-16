export const formatDate = {
  toString: (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  toDate: (stringDate: string): Date => {
    const dateArray = stringDate.split('-');
    const year = Number(dateArray[0]);
    const month = Number(dateArray[1]) - 1;
    const day = Number(dateArray[2]);
    return new Date(year, month, day);
  },
};
