// https://www.acmicpc.net/problem/19583

const solution = (arr) => {
  const timeSet = new Set();
  let result = 0;

  arr.forEach((x) => {
    const time = timeCal([x[0]])[0];
    if (time <= S) {
      timeSet.add(x[1]);
    }
  });

  arr.forEach((x) => {
    const time = timeCal([x[0]])[0];
    if (time >= E && time <= Q) {
      if (timeSet.has(x[1])) {
        result++;
        timeSet.delete(x[1]);
      }
    }
  });
  return result;
};

const timeCal = (timeStr) => {
  return timeStr.map((x) => {
    const [h, m] = x.split(":").map(Number);
    return h * 60 + m;
  });
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let S = 0;
let E = 0;
let Q = 0;

const arr = [];

rl.on("line", function (line) {
  if (line.trim() === "") {
    rl.close();
  }
  if (S === 0) [S, E, Q] = timeCal(line.split(" "));
  else {
    arr.push(line.split(" "));
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
