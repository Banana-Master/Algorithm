const solution = (H) => {
  let result = 0;
  let arrow = new Array(1000001).fill(0);
  for(let i of H) {
    if(arrow[i] > 0) {
      arrow[i] -= 1;
      arrow[i - 1] += 1;
    } else {
      arrow[i - 1] += 1;
      result += 1;
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
let H = [];

rl.on("line", function (line) {
  if (N === 0) {
    N = +line;
  } else {
    H = line.split(" ").map(Number);
  }
  if (H.length === N) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(H));
  process.exit();
});
