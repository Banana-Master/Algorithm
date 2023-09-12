const solution = (a, b) => {
  return a * b;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input1 = 0;
let input2 = 0;

rl.on("line", function (line) {
  if (input1 === 0) {
    input1 = +line;
  } else {
    input2 = +line;
  }
  if (input2 !== 0) rl.close();
}).on("close", function () {
  console.log(solution(input1, input2));
  process.exit();
});
