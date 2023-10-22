const solution = (input) => {
  const [A, B] = input;
  return Math.max(+A, +B);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((x) => [...x].reverse().join(""));
  rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
