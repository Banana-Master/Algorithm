const solution = (input) => {
  const [N, L] = input;
  const result = [];
  // 풀이 공식 : L * x = N - (L * (L+1)) / 2;
  for (let i = L; i <= 100; i++) {
    let x = N - (i * (i + 1)) / 2;
    if (x % i === 0) {
      x = x / i;
      if (x >= -1) {
        for (let j = 1; j < i + 1; j++) result.push(x + j);
        break;
      }
    }
  }

  if (result.length === 0) result.push(-1);
  return result.join(" ");
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let list = [];

rl.on("line", function (line) {
  list = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  console.log(solution(list));
  process.exit();
});
