const solution = (input) => {
  let result = 10;
  for(let i = 1; i < input.length; i++) {
    if(input[i -1] === input[i]) {
      result += 5;
    } else {
      result += 10;
    }
  }
  return result;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
  input = line.split('');
  rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
