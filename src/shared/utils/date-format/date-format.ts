import { format } from 'date-fns';

export const formatDate = (date: string) => {
  return format(new Date(date), 'yyyy.M.d');
};

export const formatDateNoYear = (date: string) => {
  return format(new Date(date), 'M/d');
};
