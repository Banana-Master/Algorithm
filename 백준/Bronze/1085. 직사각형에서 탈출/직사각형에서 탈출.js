const solution = (arr) => {
  let [x, y, w, h] = arr;
  return Math.min(x, w - x, y, h - y);
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
