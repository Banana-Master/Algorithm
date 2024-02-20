const solution = (arr) => {
  const studentCount = {};

  list.forEach((x) => {
    studentCount[x] = 0;
  })

  arr.forEach((x) => {
    studentCount[x]++;
  });

  const sortStudentCount = Object.entries(studentCount).sort((x, y) => y[1] - x[1]);

  return sortStudentCount.map(([student, count]) => `${student} ${count}`).join('\n');
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
let list = [];
const arr = [];

rl.on("line", function (line) {
  if (N === 0) N = +line;
  else if (list.length === 0) list = line.split(" ");
  else arr.push(line.split(" "));
  if (N === arr.length) rl.close();
}).on("close", function () {
  const filterArr = arr.reduce((x, y) => x.concat(y), []);
  console.log(solution(filterArr));
  process.exit();
});
