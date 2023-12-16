import { formatDate } from './formatDate';

export const getDate = {
  today: () => formatDate.toString(new Date()),
  threeDaysAgo: () => {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    return formatDate.toString(threeDaysAgo);
  },
  weekAgo: () => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return formatDate.toString(weekAgo);
  },
  monthAgo: () => {
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    return formatDate.toString(monthAgo);
  },
  yearAgo: () => {
    const yearAgo = new Date();
    yearAgo.setFullYear(yearAgo.getFullYear() - 1);
    return formatDate.toString(yearAgo);
  },
};
