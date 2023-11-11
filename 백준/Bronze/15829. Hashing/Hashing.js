const solution = (str) => {
  let result = 0;
  let r = 1;
  for(let i = 0; i < count; i++) {
    result += (str.charCodeAt(i) - 96) * r;
    result %= 1234567891;
    r *= 31;
    r %= 1234567891;
  }
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
    input = line;
    rl.close();
  }
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
