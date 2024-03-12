const solution = (a: number, k: number): number => {
  let count = 0;

  while (a !== k) {
    if (k % 2 === 0 && k / 2 >= a) {
      k /= 2;
    } else {
      k--;
    }
    count++;
  }

  return count;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = 0;
let k = 0;

rl.on("line", function (line) {
  [a, k] = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  console.log(solution(a, k));
  process.exit();
});
