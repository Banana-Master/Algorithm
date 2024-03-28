const solution = (arr: number[][]): string => {
  let [todayY, todayM, todayD] = arr[0];
  let [dYear, dMonth, dDay] = arr[1];

  if (
    dYear - todayY > 1000 ||
    (dYear - todayY === 1000 && dMonth > todayM) ||
    (dYear - todayY === 1000 && dMonth === todayM && dDay >= todayD)
  ) {
    return "gg";
  }

  let today: number = 0;
  let d: number = 0;

  // 시작 날짜(today) 설정
  for (let i = 1; i < todayY; i++) {
    for (let j = 0; j < daysInMonth.length; j++) {
      today += daysInMonth[j];
      if (isLeapYear(i) && j === 1) {
        today++;
      }
    }
  }
  for (let j = 0; j < todayM - 1; j++) {
    today += daysInMonth[j];
    if (isLeapYear(todayY) && j === 1) {
      today++;
    }
  }
  today += todayD;

  // 목표 날짜(d) 설정
  for (let i = 1; i < dYear; i++) {
    for (let j = 0; j < daysInMonth.length; j++) {
      d += daysInMonth[j];
      if (isLeapYear(i) && j === 1) {
        d++;
      }
    }
  }
  for (let j = 0; j < dMonth - 1; j++) {
    d += daysInMonth[j];
    if (isLeapYear(dYear) && j === 1) {
      d++;
    }
  }
  d += dDay;
  const result = d - today;
  return `D-${result}`;
};

const daysInMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr: number[][] = [];

rl.on("line", function (line) {
  arr.push(line.split(" ").map(Number));
  if (arr.length === 2) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
