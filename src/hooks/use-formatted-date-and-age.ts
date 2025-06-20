import { useMemo } from 'react';

export function useFormattedDateAndAge(date: Date | string) {
  return useMemo(() => {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;

    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const year = parsedDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    const today = new Date();
    let age = today.getFullYear() - parsedDate.getFullYear();
    const monthDiff = today.getMonth() - parsedDate.getMonth();
    const dayDiff = today.getDate() - parsedDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return {
      formattedDate,
      age,
      display: `${formattedDate} ( ${age} years )`,
    };
  }, [date]);
}
