// const date = new Date();
// function dateToUTCDate(date) {
//   return new Date(
//     Date.UTC(
//       date.getUTCFullYear(),
//       date.getUTCMonth(),
//       date.getUTCDate(),
//       date.getUTCHours(),
//       date.getUTCMinutes(),
//       date.getUTCSeconds(),
//       date.getUTCMilliseconds()
//     )
//   );
// }

// function dateToUTC(date) {
//   return Date.UTC(
//     date.getUTCFullYear(),
//     date.getUTCMonth(),
//     date.getUTCDate(),
//     date.getUTCHours(),
//     date.getUTCMinutes(),
//     date.getUTCSeconds(),
//     date.getUTCMilliseconds()
//   );
// }
// const dd = Date.UTC(
//   date.getUTCFullYear(),
//   date.getUTCMonth(),
//   date.getUTCDate(),
//   date.getUTCHours(),
//   date.getUTCMinutes(),
//   date.getUTCSeconds(),
//   date.getUTCMilliseconds()
// );
// console.log(date);+
// console.log(dd);
// console.log(date.toISOString());
// console.log(dateToUTCDate(date));
// console.log(dateToUTC(date));

function getTimeCeiling(date, interval, addOn = 0) {
  const ms = 1000 * 60 * interval;
  const time = new Date(
    Math.ceil(date.getTime() / ms) * ms + addOn * 60 * 1000
  );
  let hour = time.getHours().toString();
  if (hour.length == 1) {
    hour = `0${hour}`;
  }
  let minute = time.getMinutes().toString();
  if (minute.length == 1) {
    minute = `0${minute}`;
  }
  return `${hour}:${minute}`;
}

function dateToYYYYMMDD(date) {
  const dateInParts = new Date(date)
    .toLocaleDateString('locale', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .split('/');
  return `${dateInParts[2]}-${dateInParts[0]}-${dateInParts[1]}`;
}

// function getTimeCeiling2(date, interval, addOn = 0) {
//   const ms = 1000 * 60 * interval;

//   const msCeiling = new Date(
//     Math.ceil(date.getTime() / ms) * ms + addOn * 60 * 1000
//   );
//   console.log(msCeiling);

// return `${localHour.toString()}:${localMinuteCeil}`;
//}
// const datee = new Date('2020-01-01T01:00Z');
// console.log(datee.toISOString());
// console.log(datee);
// console.log(datee.toLocaleString());
// console.log(new Date(datee.getTime() - datee.getTimezoneOffset() * 60 * 1000));
// console.log('dateToYYYYMMDD', dateToYYYYMMDD(datee));
// console.log(datee.toLocaleDateString());

console.log(new Date().trim());
