const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = 0;
let list1 = [];

rl.on('line', function (line) {
  if (n == 0) {
    n = Number(line);
  } else {
    list1.push(line);
    if (list1.length === n) {
      console.log(solution(list1));
      process.exit();
    }
  }
});

const solution = (input) => {
    let result = [];
    input.forEach((x) => {
        let arr = x.split(' ');
        let num = Number(arr[0]);
        let s = arr[1];
        let repeat = '';
        for(let i = 0; i < s.length; i++) {
            repeat += s[i].repeat(num);
        }
        result.push(repeat);
    })
    return result.join('\n');
}