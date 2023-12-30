const solution = (input) => {
  const set = new Set();
  input.forEach((x) => set.add(x));
  return count - set.size;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let arr = [];

rl.on("line", function (line) {
  if (count === 0) {
    count = +line;
  }
  else {
    arr = line.split(' ').map(Number);
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
