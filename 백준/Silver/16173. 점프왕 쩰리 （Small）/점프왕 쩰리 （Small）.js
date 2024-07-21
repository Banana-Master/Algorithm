const solution = (game, visited) => {
  const n = game.length;
  const queue = [[0, 0]]; // 시작점
  const directions = [
    [1, 0],
    [0, 1],
  ]; // 아래, 오른쪽

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const jump = game[x][y];

    if (jump === -1) {
      return "HaruHaru";
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx * jump;
      const ny = y + dy * jump;

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }

  return "Hing";
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
const game = [];
let visited;

rl.on("line", (line) => {
  if (n === 0) {
    n = Number(line);
    visited = Array.from({ length: n }, () => new Array(n).fill(false));
    visited[0][0] = true;
  } else {
    const input = line.split(" ");
    game.push(input.map(Number));
  }
  if (game.length === n) {
    rl.close();
  }
}).on("close", () => {
  console.log(solution(game, visited));
  process.exit();
});
