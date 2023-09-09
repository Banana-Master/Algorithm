const solution = (input) => {
  const obj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  input.slice(1).forEach((line) => {
    const [finger1, finger2] = line.split(" ").map(Number);
    obj[finger1]++;
    obj[finger2]++;
  });

  return (
    obj[1] > 0 &&
    obj[2] === 0 &&
    obj[3] > 0 &&
    obj[4] > 0 &&
    obj[5] === 0
  ) ? 'Wa-pa-pa-pa-pa-pa-pow!' : 'Woof-meow-tweet-squeek';
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const input = [];

rl.on('line', function (line) {
  if (count === 0) count = Number(line);
  else input.push(line);
  if (count === input.length) rl.close();
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
