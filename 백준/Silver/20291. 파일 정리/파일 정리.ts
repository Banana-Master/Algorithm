const solution = (obj: { [key: string]: number }): string => {
  const entries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
  const result = entries.map(([key, value]) => `${key} ${value}`).join("\n");
  return result;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let count = 0;
const obj = {};

rl.on("line", function (line) {
  if (n === 0) {
    n = +line;
  } else {
    count++;
    const input = line.split(".")[1];
    if (obj[input] === undefined) {
      obj[input] = 1;
    } else {
      obj[input]++;
    }
  }

  if (n === count) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(obj));
  process.exit();
});
