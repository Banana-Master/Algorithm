const solution = (arr) => {
  const bookList = {};
  arr.forEach((x) => {
    if(bookList[x] === undefined) {
      bookList[x] = 1;
    } else {
      bookList[x]++;
    }
  });
  const max = Math.max(...Object.values(bookList));
  const result = Object.keys(bookList).filter((key) => bookList[key] === max);
  return result.sort()[0];
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
const arr = [];

rl.on("line", function (line) {
  if(N === 0) N = +line;
  else arr.push(line);
  if(N === arr.length) rl.close();
}).on("close", function () {
  console.log(solution(arr));
  process.exit();
});
