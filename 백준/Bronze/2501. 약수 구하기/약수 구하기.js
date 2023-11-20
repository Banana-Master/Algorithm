const solution = (num, index) => {
  const result = [];
  for(let i = 1; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      result.push(i);
      if(num / i !== i) {
        result.push(num / i);
      }
    }
  }
  result.sort((x, y) => x - y);
  return result[index - 1] ? result[index - 1] : 0;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;

rl.on("line", function (line) {
  [N, K] = line.split(' ').map(Number);
  rl.close();
}).on("close", function () {
  console.log(solution(N, K));
  process.exit();
});
