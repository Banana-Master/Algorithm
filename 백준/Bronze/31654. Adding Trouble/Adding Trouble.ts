const solution = (arr: number[]): string => {
  const [a, b, c] = arr;
  return a + b === c ? "correct!" : "wrong!";
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr: number[] = [];

rl.on("line", function (line) {
  arr = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
