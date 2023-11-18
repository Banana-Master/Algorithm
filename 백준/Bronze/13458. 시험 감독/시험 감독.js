const solution = (a, b, c) => {
  let result = 0;
  a.forEach((x) => {
    let num = x;
    num -= b;
    result += 1;
    if(num > 0) result += Math.ceil(num / c);
  });
  return result;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let N = 0;
let A = [];
let B = 0;
let C = 0;

rl.on("line", function (line) {
  if(N === 0) {
    N = +line;
  } else if(A.length === 0) {
    A = line.split(' ').map(Number);
  } else if(B === 0) {
    [B, C] = line.split(' ').map(Number);
    rl.close();
  }
}).on("close", function () {
  console.log(solution(A, B, C));
  process.exit();
});
