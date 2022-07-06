export function dateToMonthName(date: Date): string {
  return date.toLocaleString('default', { month: 'long' });
}

export function dateToDayName(date: Date): string {
  return date.toLocaleString('default', { weekday: 'short' });
}

export function getDays(days: number, selectedDate: Date) {
  const daysArray: Date[] = [];
  if (days == 1) {
    daysArray.push(selectedDate);
    return daysArray;
  }

  const dayOfWeek = selectedDate.getDay();
  const dayOfMonth = selectedDate.getDate();

  // weekly
  if (days == 7) {
    daysArray[dayOfWeek] = selectedDate;
    for (let i = 0; i < days; i++) {
      if (i !== dayOfWeek) {
        daysArray[i] = new Date(
          selectedDate.getTime() + (i - dayOfWeek) * 24 * 60 * 60 * 1000
        );
      }
    }
    return daysArray;
    // monthly
  } else {
    const currentMonth = selectedDate.getMonth();
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      currentMonth + 1,
      0
    ).getDate();
    daysArray[dayOfMonth] = selectedDate;
    for (let i = 1; i <= daysInMonth; i++) {
      if (i !== dayOfMonth) {
        daysArray[i] = new Date(
          selectedDate.getTime() + (i - dayOfMonth) * 24 * 60 * 60 * 1000
        );
      }
    }
    return daysArray;
  }
}

export function incrementDate(date: Date, days: number) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

export function decrementDate(date: Date, days: number) {
  return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
}

export function dateStringToNormalizedDateString(date: string){
  return new Date(date).toDateString()
}