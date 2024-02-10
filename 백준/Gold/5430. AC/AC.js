const solution = (arr) => {
  const result = [];

  for(let i = 0; i < arr.length; i += 3) {
    let [p, n, x] = [arr[i], arr[i + 1], arr[i + 2]];
    x = JSON.parse(x);

    let reverse = false;
    
    for(let j = 0; j < p.length; j++) {
      if(p[j] === 'R') {
        reverse = !reverse;
      } else if(p[j] === 'D') {
        if(x.length === 0) {
          result.push('error');
          break;
        } else {
          reverse ? x.pop() : x.shift() ;
        }
      }
      if(j === p.length -1) {
        reverse ? result.push(JSON.stringify(x.reverse())) : result.push(JSON.stringify(x));
      }
    }
    
    
  }
  return result.join('\n');
};


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = 0;
const arr = [];

rl.on("line", function (line) {
  if(T === 0) {
    T = +line;
  } else {
    arr.push(line);
  }
  if(arr.length === T * 3) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
