const solution = (input) => {
  const point = [10, 8, 6, 5, 4, 3, 2, 1];
  const obj = {};
  input.forEach(([time, team]) => obj[time] = team);
  let B = 0;
  let R = 0;
  Object.keys(obj)
    .sort()
    .forEach((x, i) => {
      if (obj[x] === "R") { R += point[i] } 
      else { B += point[i] }
    });
  return B > R ? "Blue" : "Red";
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line.split(" "));
  if (input.length === 8) rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
