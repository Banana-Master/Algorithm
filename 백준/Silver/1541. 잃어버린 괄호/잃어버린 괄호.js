const solution = (input) => {
  let result = 0;
  const plusNumber = input.split('-');
  plusNumber.forEach((x, i) => {
    const plus =  x.split('+').map(Number).reduce((a, b) => a + b);
    i === 0 ? result += plus : result -= plus;
  });
  return result;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
