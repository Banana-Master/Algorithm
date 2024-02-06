const solution = (N, M, S) => {
  let result = 0;
    let i = 0;
    let count = 0;

    while (i < M - 1) {
      if (S.substring(i, i + 3) === "IOI") {
        i += 2;
        count++;
        if (count === N) {
          result++;
          count--;
        }
      } else {
        i++;
        count = 0;
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
let S = "";

rl.on("line", function (line) {
  if (N === 0) {
    N = +line;
  } else if (M === 0) {
    M = +line;
  } else {
    S = line;
    rl.close();
  }
}).on("close", function () {
  console.log(solution(N, M, S));
  process.exit();
});
