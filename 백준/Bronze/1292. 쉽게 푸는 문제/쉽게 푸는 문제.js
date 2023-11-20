const solution = (start, end) => {
  const result = [];
  let count = 1;
  while (true) {
    for (let i = 0; i < count; i++) {
      result.push(count);
      if (result.length >= end) break;
    }
    if (result.length >= end) break;
    count++;
  }
  return result.splice(start - 1, end).reduce((x, y) => x + y, 0);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let A, B;

rl.on('line', function (line) {
  [A, B] = line.split(' ').map(Number);
  rl.close();
}).on('close', function () {
  console.log(solution(A, B));
  process.exit();
});
