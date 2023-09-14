const solution = (input) => {
  let result = 0;
  let obj = {};
  input.forEach((item) => {
    if (item === "ENTER") {
      obj = {};
    } else {
      if (!obj[item]) {
        obj[item] = true;
        result++;
      }
    }
  });
  return result;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];
let count = 0;

rl.on("line", (line) => {
  if (count === 0) {
    count = +line;
  } else {
    arr.push(line);
  }
  if (arr.length === count) rl.close();
}).on("close", () => {
  console.log(solution(arr));
  process.exit();
});
