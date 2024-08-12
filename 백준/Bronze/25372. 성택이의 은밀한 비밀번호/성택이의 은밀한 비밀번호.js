const solution = (arr) => {
  const result = arr.map((x) => {
    return x.length >= 6 && x.length <= 9 ? "yes" : "no";
  });
  return result.join("\n");
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
const arr = [];

rl.on("line", (line) => {
  if (n === 0) {
    n = Number(line);
  } else {
    arr.push(line);
  }
  if (arr.length === n) {
    rl.close();
  }
}).on("close", () => {
  console.log(solution(arr));
  process.exit();
});
