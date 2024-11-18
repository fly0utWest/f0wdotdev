export function dateFormatter(date: string | Date | null): string {
  if (!date) {
    return 'Invalid date';
  }

  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) {
    return 'Invalid date';
  }

  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();

  return `${day}.${month}.${year}`;
}
