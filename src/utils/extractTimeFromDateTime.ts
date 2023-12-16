export const extractTimeFromDateTime = (dateTime: string): string => {
  const time = dateTime.split(' ')[1];
  return time.split(':').slice(0, 2).join(':');
};
