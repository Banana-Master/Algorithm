const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let inputCount = 0;

rl.on('line', function(line) {
  if (inputCount === 0) {
    inputCount = parseInt(line);
  } else {
    input.push(Number(line));
  }

  if (input.length === inputCount) {
    console.log(solution(input));
    rl.close();
  }
});

rl.on('close', function() {
  process.exit(0);
});

const money = {
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1,
};

const solution = (input) => {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let cents = input[i];

    let quarterCount = Math.floor(cents / money.quarter);
    cents -= quarterCount * money.quarter;

    let dimeCount = Math.floor(cents / money.dime);
    cents -= dimeCount * money.dime;

    let nickelCount = Math.floor(cents / money.nickel);
    cents -= nickelCount * money.nickel;

    let pennyCount = cents;

    result.push(`${quarterCount} ${dimeCount} ${nickelCount} ${pennyCount}`);
  }

  return result.join('\n');
};
