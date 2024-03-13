const solution = (arr: number[][]): string | number[] => {
  const stack: number[] = [];
  const result: number[] = [];
  arr.forEach((x) => {
    if (x[0] === 1) {
      stack.push(x[1]);
    } else if (x[0] === 2) {
      if(stack.length > 0) {
        result.push(stack[stack.length -1]);
        stack.pop();
      } else {
        result.push(-1);
      }
    } else if (x[0] === 3) {
      result.push(stack.length);
    } else if (x[0] === 4) {
      result.push(stack.length === 0 ? 1 : 0);
    } else if (x[0] === 5) {
      if (stack.length > 0) {
        result.push(stack[stack.length -1]);
      } else {
        result.push(-1);
      }
    }
  });

  return result.join('\n');
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let arr: number[][] = [];

rl.on("line", function (line) {
  if (n === 0) {
    n = +line;
  } else {
    arr.push(line.split(" ").map(Number));
  }
  if (n === arr.length) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
