var date = new Date();
console.log(date);

let day = date.getDay();

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(`Today is : ${week[day - 1]}`);

console.log(
  ` Current time is: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
);
