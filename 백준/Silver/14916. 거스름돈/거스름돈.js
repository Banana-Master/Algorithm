const solution = (input) => {
  let count = 0;
  while(input > 0) {
    if(input % 5 === 0) {
      count += (input / 5);
      input = 0;
    } else {
      count++;
      input -= 2;
    }
  }
  return input === 0 ? count : -1;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
  input = +line;
  rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
