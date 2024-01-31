const solution = (S) => {
  let sum = 0;
  let current = 0;
  while(sum <= S) {
    current++;
    sum += current;
  }
  return current - 1;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let S = 0;

rl.on("line", function (line) {
  S = +line;
  rl.close();
}).on("close", function () {
  console.log(solution(S));
  process.exit();
});
