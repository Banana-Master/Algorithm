const solution = (arr) => {
  return arr
    .sort((a, b) => {
      // y좌표가 증가하는 순으로 정렬
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      }
      // y좌표가 같을 때 x좌표가 증가하는 순으로 정렬
      return a[0] - b[0];
    })
    .map((pair) => pair.join(" "))
    .join("\n");
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = 0;
const arr = [];

rl.on("line", function (line) {
  if (N === 0) {
    N = +line;
  } else {
    arr.push(line.split(" ").map(Number));
  }
  if (arr.length === N) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
