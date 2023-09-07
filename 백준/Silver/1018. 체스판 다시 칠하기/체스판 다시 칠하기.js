const solution = (board) => {
  const N = board.length; // 보드의 세로 길이
  const M = board[0].length; // 보드의 가로 길이
  const INF = 64; // 최대 다시 칠해야 하는 정사각형 개수는 64 (모든 칸을 다시 칠해야 하는 경우)

  let minCount = INF; // 최소 다시 칠해야 하는 정사각형 개수를 저장할 변수

  // 8x8 체스판을 옮기면서 모든 경우를 탐색
  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let count1 = 0; // 첫 번째 경우 (맨 왼쪽 위 칸이 흰색인 경우)
      let count2 = 0; // 두 번째 경우 (맨 왼쪽 위 칸이 검은색인 경우)

      for (let x = i; x < i + 8; x++) {
        for (let y = j; y < j + 8; y++) {
          // 첫 번째 경우: (x + y)가 짝수인 경우에는 흰색, 홀수인 경우에는 검은색이어야 함
          if ((x + y) % 2 === 0) {
            if (board[x][y] !== 'W') count1++;
            if (board[x][y] !== 'B') count2++;
          } else {
            // 두 번째 경우: (x + y)가 짝수인 경우에는 검은색, 홀수인 경우에는 흰색이어야 함
            if (board[x][y] !== 'B') count1++;
            if (board[x][y] !== 'W') count2++;
          }
        }
      }

      // 현재 경우의 최소 다시 칠해야 하는 정사각형 개수를 업데이트
      minCount = Math.min(minCount, count1, count2);
    }
  }

  return minCount;
};

const black = [
  ["BWBWBWBW"],
  ["WBWBWBWB"],
  ["BWBWBWBW"],
  ["WBWBWBWB"],
  ["BWBWBWBW"],
  ["WBWBWBWB"],
  ["BWBWBWBW"],
  ["WBWBWBWB"],
];

const white = [
  ["WBWBWBWB"],
  ["BWBWBWBW"],
  ["WBWBWBWB"],
  ["BWBWBWBW"],
  ["WBWBWBWB"],
  ["BWBWBWBW"],
  ["WBWBWBWB"],
  ["BWBWBWBW"],
];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const list = [];
let N = 0;
let M = 0;

rl.on("line", function (line) {
  if (N === 0) {
    N = Number(line.split(" ")[0]);
    M = Number(line.split(" ")[1]);
  } else {
    list.push(line);
  }
  if (N === list.length) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(list));
  process.exit();
});
