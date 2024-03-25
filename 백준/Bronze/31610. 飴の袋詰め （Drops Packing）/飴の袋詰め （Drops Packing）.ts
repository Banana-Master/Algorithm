const solution = (num: number[]): number => {
  const [a, b, c] = num;
  return a * b + c;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr: number[] = [];

rl.on("line", function (line) {
  arr.push(+line);
  if (arr.length === 3) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
