// from 1700 to 1917 Julian Calendar leap on year % 4 === 0
// at   1918 after 31 jan go to 14 feb       special case
// from 1919 to 2700 follow Gergorian Calendar leap on year % 400 == 0 or (year % 4 == 0 & year % 100 !== 0)

// feb have 29 day in leep year and 28 in others
// on sep 12 not leap 13 in leap
function dayOfProgrammer(year) {
  if (year === 1918) {
    return `26.09.${year}`;
  }

  let isLeap;

  if (year < 1918) {
    // Julian calendar
    isLeap = year % 4 === 0;
  } else {
    // Gregorian calendar
    isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }

  const day = isLeap ? 12 : 13;

  return `${day.toString().padStart(2, "0")}.09.${year}`;
}

console.log(dayOfProgrammer(1800));
