const solution = (arr) => {
  arr.sort((x, y) => x[1] === y[1] ? x[0] - y[0] : x[1] - y[1]);
  let result = 1;
  let initEnd = arr[0][1];
  for(let i = 1; i < arr.length; i++) {
    const [start, end] = arr[i];
    if(start >= initEnd) {
      result++;
      initEnd = end;
    }
  }
  return result;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const input = [];
rl.on("line", function (line) {
  if(count === 0) {
    count = +line;
  } else {
    input.push(line.split(' ').map(Number));
  }
  if(input.length === count) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
