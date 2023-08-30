const solution = (input) => {
  const result = {};
  input.forEach((item) => {
    const [people, state] = item;
    result[people] = state;
  });
  return Object.keys(result)
    .filter((x) => result[x] === "enter")
    .sort((x, y) => (x > y ? -1 : 1))
    .join('\n');
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let count = 0;

rl.on("line", function (line) {
  if (count === 0) {
    count = Number(line);
  } else {
    input.push(line.split(" "));
  }
  if (input.length === count) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
