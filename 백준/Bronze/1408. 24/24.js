const solution = (input) => {
  const start = input[0][0] * 3600 + input[0][1] * 60 + input[0][2];
  const end = input[1][0] * 3600 + input[1][1] * 60 + input[1][2];
  let result = end - start;

  if(result < 0) {
    result += 24 * 3600;
  }

  let hour = Math.floor(result / 3600)+'';
  let minute = Math.floor((result % 3600) / 60)+'';
  let second = Math.floor(result % 60)+'';

  if (hour.length === 1) {
    hour = "0" + hour;
  }
  if (minute.length === 1) {
    minute = "0" + minute;
  }
  if (second.length === 1) {
    second = "0" + second;
  }

  return `${hour}:${minute}:${second}`;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.split(":").map(Number));
  if (input.length === 2) rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
