const solution = (num) => {
  const arr = [];
  for(let i = 1; i <= num; i++) {
    arr.push(i);
  }
  const visited = new Array(num).fill(false);
  const selected = [];

  let answer = '';
  const dfs = (arr, depth) => {
    if(depth === num) {
      const result = [];
      selected.forEach((x) => {
        result.push(arr[x]);
      });
      result.forEach((x) => {
        answer += x + " ";
      });
      answer += '\n';
      return;
    }
    for(let i = 0; i < arr.length; i++) {
      if(visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }
  dfs(arr, 0);
  return answer;
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on("line", function (line) {
  input = +line;
  rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
