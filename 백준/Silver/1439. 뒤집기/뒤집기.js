const solution = (input) => {
  const arr = input.split('');
  let state = 'x';
  const obj = {'1' : 0, '0' : 0 }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== state) {
      state = arr[i];
      obj[arr[i]]++;
    }
  }
  return Math.min(...Object.values(obj));
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
