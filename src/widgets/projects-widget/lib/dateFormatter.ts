export function dateFormatter(date: string) {
  const truncatedDate = date.slice(0, 10);

  const [year, month, day] = truncatedDate.split('-');

  const months =
  ['January', 'February', 'March', 'April',
   'May', 'June', 'July', 'August',
   'September', 'October', 'November', 'December'];

  const resultData = `${months[Number(month) - 1]} ${day}th, ${year}`;

  return resultData;
}
