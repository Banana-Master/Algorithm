const solution = (n, m) => {
  const obj = {};
  n.forEach((x) => {
    obj[x] = 1;
  });
  const result = [];
  m.forEach((x) => {
    obj[x] ? result.push(1) : result.push(0);
  });
  return result.join(" ");
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let N = [];
let M = [];

rl.on("line", function (line) {
  count++;
  if (count === 2) N = line.split(" ");
  if (count === 4) M = line.split(" ");
  if (count === 4) rl.close();
}).on("close", function () {
  console.log(solution(N, M));
  process.exit();
});
