export default function DateSelect() {
  const currentYear = new Date().getFullYear();
  let lowYear = currentYear - 10;
  const years = [];
  while (lowYear <= currentYear + 10) {
    years.push(lowYear++);
  }
  const yearOptions = years.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));
  return <>{yearOptions}</>;
}
