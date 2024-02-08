const solution = (arr) => {
  let start = 1;
  let end = Math.max(...arr);

  let result = 0;
  while(start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    arr.forEach((x) => {
      total += Math.min(mid, x);
    });
    if(total <= M) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
let M = 0;
let arr = [];

rl.on("line", function (line) {
  if(N === 0) {
    N = +line;
  } else if(arr.length === 0) {
    arr = line.split(' ').map(Number);
  } else {
    M = +line;
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
