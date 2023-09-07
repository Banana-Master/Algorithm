const solution = (n, m) => {
  const result = [];
  for(let i = 0; i < n.length; i++) {
    const arr = [];
    for(let j = 0; j < n[i].length; j++) {
      arr.push(n[i][j] + m[i][j]);
    }
    result.push(arr.join(' '))
  }
  return result.join('\n');
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const N = [];
const M = [];
let count = 0;

rl.on("line", function (line) {
  if (count === 0) {
    count = Number(line.split(" ")[0]);
  } else if (N.length !== count) {
    N.push(line.split(" ").map(Number));
  } else {
    M.push(line.split(" ").map(Number));
  }
  if(M.length === count) {
    rl.close();
  }
  
}).on("close", function () {
  console.log(solution(N, M));
  process.exit();
});
