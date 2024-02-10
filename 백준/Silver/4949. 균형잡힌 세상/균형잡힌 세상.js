const solution = (arr) => {
  const result = [];
  arr.forEach((x) => {
    const bracket = [];
    for(let i = 0; i < x.length; i++) {
      if(x[i] === '[' || x[i] === '(') {
        bracket.push(x[i]);
      } else if(x[i] === ']' && bracket[bracket.length -1] === '[') {
        bracket.pop();
      } else if(x[i] === ')' && bracket[bracket.length -1] === '(') {
        bracket.pop();
      } else if(x[i] === '.' && bracket.length === 0) {
        result.push('yes');
      } else {
        result.push('no');
        break;
      }
    }
  });
  return result.join('\n');
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on("line", function (line) {
  if(line === '.') {
    rl.close();
  } else {
    arr.push(line.match(/[\[\]()\.]/g));
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
