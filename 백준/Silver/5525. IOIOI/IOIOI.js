const solution = (input, num) => {
  const init = "IO".repeat(num) + "I";
  let result = 0;
  for (let i = 0; i < input.length - init.length + 1; i++) {
    const slice = input.slice(i, i + init.length);
    if (init === slice) {
      result++;
      i++;
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
  console.log(solution(S, N));
  process.exit();
});
