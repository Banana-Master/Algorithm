const solution = (computerMap) => {
  visited = Array(computer + 1).fill(false);
  computers = new Array(computer + 1)
    .fill()
    .map(() => new Array(computer + 1).fill(false));

  computerMap.forEach((x) => {
    const [num1, num2] = x;
    computers[num1][num2] = true;
    computers[num2][num1] = true;
  });

  DFS(1);

  return result - 1;
};

const DFS = (num) => {
  visited[num] = true;
  result++;
  for (let i = 1; i < computers.length; i++) {
    if (visited[i] === false && computers[num][i]) {
      DFS(i);
    }
  }
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let computer = 0;
let lines = 0;
const computerMap = [];
let result = 0;
let visited;
let computers;

rl.on("line", function (line) {
  if (computer === 0) {
    computer = +line;
  } else if (lines === 0) {
    lines = +line;
  } else {
    computerMap.push(line.split(" ").map(Number));
  }

  if (computer !== 0 && lines !== 0 && computerMap.length === lines) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(computerMap));
  process.exit();
});
