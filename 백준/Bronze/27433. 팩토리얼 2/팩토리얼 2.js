const solution = (n) => {
  if(n <= 1) return 1;
  return n * solution(n - 1);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0
rl.on("line", function (line) {
  n = +line;
  rl.close();
}).on("close", function () {
  console.log(solution(n));
  process.exit();
});
