
const solution = (arr) => {
  let result = 0;
  arr.forEach((x, i) => {
    result += x * (31 ** i);
  })
  return result;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let input;
rl.on("line", function (line) {
  if(count === 0) {
    count = +line;
  } else {
    input = line.split('').map((x) => x.charCodeAt() - 96);
    rl.close();
  }
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
