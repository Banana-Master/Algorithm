const solution = (arr) => {
  const [a, b, c, d, e, f] = arr;
  const x = (c * e - b * f) / (a * e - b * d);
  const y = (c * d - a * f) / (b * d - a * e);
  return x + " " + y;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", function (line) {
  arr = line.split(' ').map(Number);
  rl.close();
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
