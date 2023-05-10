const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const [num1, num2, num3, num4, num5, num6] = input.split(' ');
  console.log(refund(Number(num1), Number(num2), Number(num3), Number(num4), Number(num5), Number(num6)));
  rl.close();
});


const refund = (beer, malt, wine, carbonicAcid, water, water2) => {
    return (beer + malt + wine + carbonicAcid + water + water2) * 5;
}
