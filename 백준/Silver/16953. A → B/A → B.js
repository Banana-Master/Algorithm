const solution = (a, b) => {
  let count = 1;
  while(b > a) {
    if(b % 2 === 0) {
      b /= 2;
    } else if(b % 10 === 1) {
      b = Math.floor(b / 10);
    } else {
      break;
    }
    count++;
  }
  return b === a ? count : -1;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = 0;
let b = 0;

rl.on("line", function (line) {
  [a, b] = line.split(' ').map(Number);
  rl.close();
}).on("close", function () {
  console.log(solution(a, b));
  process.exit();
});
