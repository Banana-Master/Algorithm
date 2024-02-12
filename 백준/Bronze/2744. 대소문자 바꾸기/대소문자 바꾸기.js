const solution = (str) => {
  let result = '';
  [...str].forEach((x) => {
    if(x >= 'A' && x <= 'Z') {
      result += x.toLowerCase();
    } else {
      result += x.toUpperCase();
    }
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
