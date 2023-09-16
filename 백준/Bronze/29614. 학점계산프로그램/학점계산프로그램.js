const solution = (input) => {
  const result = [];
  input.forEach((x, i) => {
    const a = x.split("");
    if(i !== input.length -1) {
      a[a.length - 1] += "+";
    }
    
    result.push(a);
  });
  let sum = 0;
  let count = 0
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      count++;
      switch (result[i][j]) {
        case "A+":
          sum += 4.5;
          break;
        case "A":
          sum += 4.0;
          break;
        case "B+":
          sum += 3.5;
          break;
        case "B":
          sum += 3.0;
          break;
        case "C+":
          sum += 2.5;
          break;
        case "C":
          sum += 2.0;
          break;
        case "D+":
          sum += 1.5;
          break;
        case "D":
          sum += 1.0;
          break;
        default:
          break;
      }
    }
  }
  return sum / count;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (line) => {
  arr = line.split("+");
  rl.close();
}).on("close", () => {
  console.log(solution(arr));
  process.exit();
});
