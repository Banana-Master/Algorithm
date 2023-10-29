const solution = (str) => {
  const eight = BigInt(`0o${str}`);
  return eight.toString(2);
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
