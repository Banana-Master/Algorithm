const solution = (arr) => {
  const result = [];
  arr.forEach((x) => {
    x.sort((a, b) => a[0] - b[0]);
    let count = 0;
    let min = Infinity;
    for(let [a, b] of x) {
      if(b < min) {
        min = b;
        count++;
      }
    }
    result.push(count);
  });

  return result.join('\n');
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = 0;
let N = 0;
const arr = [];

let index = 0;

rl.on("line", function (line) {
  if (T === 0) T = +line;
  else if (N === 0) N = +line;
  else {
    if (!arr[index]) arr[index] = [];
    arr[index].push(line.split(' ').map(Number));
    if (arr[index].length === N) {
      N = 0;
      index++;
    }
    if (arr.length === T && index === T) rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
