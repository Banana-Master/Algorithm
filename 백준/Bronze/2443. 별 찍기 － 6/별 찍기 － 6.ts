const solution = (num: number): string => {
  const result: string[] = [];
  for (let i = 0; i < num; i++) {
    result.push(' '.repeat(i) + "*".repeat(2 * (num - i) - 1));
  }
  return result.join('\n');
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
