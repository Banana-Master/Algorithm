const solution = (arr1, arr2) => {
  return arr1.concat(arr2).sort((x, y) => x - y).join(' ');
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let A = 0;
let B = 0;
let arr1 = [];
let arr2 = [];

rl.on("line", function (line) {
  if (A === 0) {
    [A, B] = line.split(" ").map(Number);
  } else if(arr1.length === 0) {
    arr1 = (line.split(' ').map(Number));
  } else {
    arr2 = (line.split(' ').map(Number));
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr1, arr2));
  process.exit();
});
