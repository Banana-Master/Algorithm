const solution = (input) => {
  let result = input.length;
  input.forEach((str) => {
    const obj = { [str[0]]: 1 }
    let current = str[0];
    for(let i = 1; i < str.length; i++) {
      if(current === str[i]) { 
        obj[str[i]]++;
      } else if(current !== obj[str[i]] && !obj[str[i]]) {
        obj[str[i]] = 1;
        current = str[i];
      } else {
        result--;
        break;
      }
    }
  })
  return result;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const arr = [];

rl.on("line", function (line) {
  if(count === 0) count = +line;
  else arr.push(line);
	if(arr.length === count) rl.close();
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
