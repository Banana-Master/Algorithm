const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const numbers = input.split(' ').map(Number);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  rl.close();
});
