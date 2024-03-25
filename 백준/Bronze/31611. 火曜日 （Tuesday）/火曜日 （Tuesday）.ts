const solution = (num: number): number => {
  return num % 7 === 2 ? 1 : 0;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num: number = 0;

rl.on("line", function (line) {
  num = +line;
  rl.close();
}).on("close", function () {
  console.log(solution(num));
  process.exit();
});
