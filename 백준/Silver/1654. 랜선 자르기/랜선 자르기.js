const solution = (arr) => {
  let start = 0;
  let end = Math.max(...arr);

  let result = 0;
  
  while(start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    arr.forEach((x) => {
      total += parseInt(x / mid);
    });
    if(total < N) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }
  return result;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let K = 0;
let N = 0;
let arr = [];

rl.on("line", function (line) {
  if(K === 0) {
    [K, N] = line.split(' ').map(Number);
  } else {
    arr.push(+line);
  }
  if(arr.length === K) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
