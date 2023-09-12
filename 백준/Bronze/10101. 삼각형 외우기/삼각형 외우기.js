const solution = (input) => {
  const [a, b, c] = input;
  if (a + b + c !== 180) return "Error";
  else if (a === 60 && (b === 60) & (c === 60)) return "Equilateral";
  else if (a !== b && b !== c && c !== a) return "Scalene";
  else return "Isosceles";
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(+line);
  if (input.length === 3) rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
