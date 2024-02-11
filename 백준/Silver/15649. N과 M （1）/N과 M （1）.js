const solution = (num1, num2) => {
  const arr = [];
  
  for(let i = 1; i <= num1; i++) {
    arr.push(i);
  }

  const visited = new Array(num1).fill(false);
  const selected = [];

  const answer = [];

  const dfs = (arr, depth) => {
    if(depth === num2) {
      const result = [];
      selected.forEach((x) => {
        result.push(arr[x]);
      });
      const arr2 = [];
      result.forEach((x) => {
        arr2.push(x);
      });
      answer.push(arr2);
      return;
    }
    
    for(let i = 0; i < arr.length; i++) {
      if(visited[i]) {
        continue;
      }
      selected.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }

  dfs(arr, 0);
  return answer.map((x) => x.join(' ')).join('\n');
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
let M = 0;

rl.on("line", function (line) {
  [N, M] = line.split(' ').map(Number);
  rl.close();
}).on("close", function () {
  console.log(solution(N, M));
  process.exit();
});
