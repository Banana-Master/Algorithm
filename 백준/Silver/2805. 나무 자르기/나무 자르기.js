const solution = (arr) => {
  let start = 0;
  let end = Math.max(...arr);

  let result = 0;
  while(start <= end) {
    let mid = parseInt((start + end) / 2); // 현재의 중간점 (높이)
    let total = 0; // mid로 잘랐을 때 얻을 수 있는 나무의 양
    arr.forEach((x) => {
      if(x > mid) {
        total += x - mid;
      }
    });
    if(total < M) {
      end = mid - 1; // 나무의 양이 부족한 경우 더 많이 자르기 (높이 줄이기)
    } else { // 나무의 양이 충분한 경우 덜 자르기 (높이 키우기)
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

let N = 0;
let M = 0;
let arr = [];

rl.on("line", function (line) {
  if(N === 0) {
    [N, M] = line.split(' ').map(Number);
  } else {
    arr = line.split(' ').map(Number);
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
