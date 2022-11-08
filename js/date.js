const currentDate = new Date();

// date formats

// get
currentDate.toISOString(); // YYYY-MM-DDTHH:MM:SSZ
currentDate.toUTCString(); // Tue, 07 Jun 2022 16:08:53 GMT
currentDate.toDateString(); // Tue Jun 07 2022
currentDate.toTimeString(); // 14:50:26 GMT+0430 (Iran Daylight Time)
currentDate.toString(); // Tue Jun 07 2022 20:40:17 GMT+0430 (Iran Daylight Time)

// set
const targetDate1 = new Date(2018, 11, 24, 10, 33, 30);
const targetDate2 = new Date(86400000);
const targetDate3 = new Date("2015-03-25T12:00:00Z");
const targetDate4 = new Date("2015-03-25T12:00:00-06:30");
const targetDate5 = new Date("October 13, 2014 11:13:00");

const msec = Date.parse("March 21, 2012");

// to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead
// UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time)

// props
Date.constructor;
Date.prototype.toPersianDate = currentDate.toLocaleDateString("fa-IR");

// methods

// get
currentDate.getFullYear(); // Year
currentDate.getMonth(); // 0-11
currentDate.getDate(); // 1-31
currentDate.getHours(); // 0-23
currentDate.getMinutes(); // 0-59
currentDate.getSeconds(); // 0-59
currentDate.getMilliseconds(); // 0-999
currentDate.getTime(); // milliseconds since January 1, 1970

// set
currentDate.setFullYear(2022, 10, 28); // Year, optional: month, day
currentDate.setMonth(10);
currentDate.setDate(30);
currentDate.setHours(23);
currentDate.setMinutes(5);
currentDate.setSeconds(56);
currentDate.setMilliseconds(899);
currentDate.setTime(Date.now());

// locale
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
  timeZoneName: "long",
};

let persianDate = currentDate.toLocaleString("fa-IR", options);

currentDate.toLocaleDateString("fa-IR", options);

// const timeOptions = { timeZone: "UTC", timeZoneName: "short" };
// const timeOptions = { hour12: true };
// const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

let persianDate1 = currentDate.toLocaleTimeString("fa-IR", timeOptions);
