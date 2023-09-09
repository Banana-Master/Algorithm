const solution = (input) => {
  if (count === 0) return 0;
  input.sort((x, y) => x - y);
  const num = Math.round(count * 0.15);
  const arr = input.slice(num, count - num);
  const sum = arr.reduce((x, y) => x + y, 0);
  return Math.round(sum / arr.length);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const input = [];

rl.on("line", function (line) {
  if (count === 0) count = Number(line);
  else input.push(Number(line));
  if (count === input.length) rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
