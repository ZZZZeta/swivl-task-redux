export function parseDate(inputDate: string) {
  function pad(s: number) {
    return s < 10 ? '0' + s : s;
  }
  const date = new Date(inputDate);
  return [
    pad(date.getDate()),
    pad(date.getMonth() + 1),
    date.getFullYear(),
  ].join('.');
}
