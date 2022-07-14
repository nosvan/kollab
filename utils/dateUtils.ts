export function dateToMonthName(date: Date): string {
  return date.toLocaleString('default', { month: 'short' });
}

export function dateToDayName(date: Date): string {
  return date.toLocaleString('default', { weekday: 'short' });
}

export function dateToYYYYMMDD(date: Date): string {
  return date.toLocaleDateString('locale', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

export function getDays(days: number, selectedDate: Date) {
  const daysArray: Date[] = [];
  if (days == 1) {
    daysArray.push(selectedDate);
    return daysArray;
  }
  const dayOfWeek = selectedDate.getDay();
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
    const dayInMonth = selectedDate.getDate();
    const daysInMonth = getDaysInMonth(selectedDate);
    const dayOfWeekOfFirstDayOfMonth = getDayOfWeekForFirstDayOfMonth(selectedDate)
    const dayOfWeekOfLastDayOfMonth = getDayOfWeekForLastDayOfMonth(selectedDate)
    const daysToHaveOnView = (dayOfWeekOfFirstDayOfMonth-1) + daysInMonth + (7 - (dayOfWeekOfLastDayOfMonth))
    const dayInMonthOffsetToDaysToHaveOnView = dayInMonth + (dayOfWeekOfFirstDayOfMonth-2);
    const selectedDateTime = selectedDate.getTime();
    for (let i = 0; i < daysToHaveOnView; i++) {
        daysArray[i] = new Date(
          selectedDateTime + (i - dayInMonthOffsetToDaysToHaveOnView) * 24 * 60 * 60 * 1000
        );
    }
    return daysArray;
  }
}

export function getDayOfWeekForFirstDayOfMonth(date: Date): number {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay()+1
}

export function getDayOfWeekForLastDayOfMonth(date: Date): number {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    getDaysInMonth(date)
  ).getDay()+1
}

export function getDaysInNextMonth(date: Date): number {
  return new Date(date.getFullYear(),date.getMonth() + 2,0).getDate();;
}

export function getDaysInPrevMonth(date: Date): number {
  return new Date(date.getFullYear(),date.getMonth(), 0).getDate();
}

export function getDaysInMonth(date: Date): number {
  return new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();
}

export function getMiddleDayOfMonth(date: Date): Date {
  const daysInMonth = getDaysInMonth(date);
  return new Date(date.getFullYear(), date.getMonth(), Math.floor(daysInMonth / 2));
}

export function incrementDate(date: Date, days: number) {
  if(days == 30) {
    const daysInMonth = getDaysInMonth(date);
    const daysUntilNextMonth = (daysInMonth - (date.getDate() + 1)) + 10
    const newDate = new Date(date.getTime() + daysUntilNextMonth * 24 * 60 * 60 * 1000)
    return getMiddleDayOfMonth(newDate); 
  } else {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }
}

export function decrementDate(date: Date, days: number) {
  if(days == 30) {
    return getMiddleDayOfMonth(new Date(date.getTime() - (date.getDate() + 10) * 24 * 60 * 60 * 1000));
  } else {
    return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  }
}

export function dateStringToNormalizedDateString(date: string){
  return new Date(date).toDateString()
}