const solution = (num: number[]): number => {
  const [a, b] = num;
  return a + b + 3;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr: number[] = [];

rl.on("line", function (line) {
  arr.push(+line);
  if (arr.length === 2) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
