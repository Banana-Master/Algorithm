const solution = (num: number): string => {
  return num === 0 ? 'YONSEI' : 'Leading the Way to the Future';
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
