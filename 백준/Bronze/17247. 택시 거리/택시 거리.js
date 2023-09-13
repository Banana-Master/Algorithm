const solution = (input) => {
  return Math.abs(input[1][0] - input[0][0]) + Math.abs(input[1][1] - input[0][1]);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];
let N = 0;
let M = 0;
let count = 0;
rl.on("line", function (line) {
  if (N === 0) {
    [N, M] = line.split(" ").map(Number);
  } else {
    const arr2 = line.split(" ").map(Number);
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] === 1) {
        arr.push([count, i]);
        break;
      }
    }
    count++;
  }
  
  if (arr.length === 2 || count === N) rl.close();
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
