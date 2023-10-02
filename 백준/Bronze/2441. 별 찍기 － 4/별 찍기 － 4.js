const solution = (num) => {
  const result = [];
  for (let i = 0, j = num; j > 0; i++, j--) {
    const blank = " ".repeat(i);
    const star = "*".repeat(j);
    result.push(blank + star);
  }
  return result.join('\n');
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = 0;
rl.on("line", function (line) {
  num = +line;
  rl.close();
}).on("close", function () {
  console.log(solution(num));
  process.exit();
});
