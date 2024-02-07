const solution = (arr) => {
  const maxValue = Math.max(...arr);
  const fiboArr = Fibonacci(maxValue);

  const answer = [];

  arr.forEach((x) => {
    let num = x;
    const result = [];
    for(let i = fiboArr.length -1; i > 0; i--) {
      if(num >= fiboArr[i]) {
        num -= fiboArr[i];
        result.push(fiboArr[i]);
      }
    }
    answer.push(result.reverse().join(' '));
  });

  return answer.join('\n');
};

const Fibonacci = (num) => {
  const arr = [0, 1];
  while (true) {
    let point = arr.length - 1;
    if (arr[point] + arr[point - 1] <= num) {
      arr.push(arr[point] + arr[point - 1]);
    } else {
      break;
    }
  }
  return arr;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = 0;
const arr = [];

rl.on("line", function (line) {
  if (T === 0) {
    T = +line;
  } else {
    arr.push(+line);
  }
  if (arr.length === T) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
