const solution = (input) => {
  const [num1, num2] = [+input[0], input[1]];
  const result = [];
  for(let i = num2.length -1; i >= 0; i--) {
    result.push(num1 * Number(num2[i]));
  }
  let sum = 0;
  result.forEach((x, i) => {
    sum += x * (10 ** i);
  });
  result.push(sum);
  return result.join('\n');
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on("line", function (line) {
  arr.push(line);
	if(arr.length === 2) rl.close();
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
