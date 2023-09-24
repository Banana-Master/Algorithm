const solution = (input) => {
  let count = 1;
  let num = 1;
  const add = 6;
  while (input > num) {
    num = num + add * count;
    count++;
  }
  return count;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = +line;
  rl.close();
}).on("close", () => {
  console.log(solution(input));
  process.exit();
});
