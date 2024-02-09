const solution = (N) => {
  let factorial = BigInt(1);
  for(let i = 2; i <= N; i++) {
    factorial *= BigInt(i);
  }
  let result = factorial.toString().split('');

  let count = 0;
  for(let i = result.length -1; i >= 0; i--) {
    if(result[i] === '0') {
      count++;
    } else {
      break;
    }
  }
  return count;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;

rl.on("line", function (line) {
  N = +line;
  rl.close();
}).on("close", function () {
  console.log(solution(N));
  process.exit();
});
