const gcd = (a, b) => {
  if (b === 0n) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

const solution = (input) => {
  let a = BigInt(input[0]);
  let b = BigInt(input[1]);
  let num = gcd(a, b);
  let result = '1'.repeat(Number(num))
  return result;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let list = [];

rl.on("line", function (line) {
  list = line.split(' ').map((x) => BigInt(x));
  rl.close();
}).on("close", function () {
  console.log(solution(list));
  process.exit();
});
