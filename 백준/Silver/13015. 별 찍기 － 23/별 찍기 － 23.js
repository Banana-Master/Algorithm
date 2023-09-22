const solution = (input) => {
  const star = [];
  let space = (input - 2) * 2 + 1;
  star.push("*".repeat(input) + " ".repeat(space) + "*".repeat(input));
  for (let i = 1; i < input -1; i++) {
    if(space >= 2) space -= 2;
    star.push(
      " ".repeat(i) + "*" + " ".repeat(input - 2) + "*" + " ".repeat(space) + "*" + " ".repeat(input - 2) + "*"
    );
  }
  star.push(" ".repeat(input -1) + "*" + " ".repeat(input - 2) + "*" + " ".repeat(input - 2) + "*");
  for(let i = input - 2, j = 1; i > 0; i--, j += 2) {
    star.push(" ".repeat(i) + "*" + " ".repeat(input - 2) + "*" + " ".repeat(j) + "*" + " ".repeat(input -2) + "*")
  }
  star.push(star[0])
  return star.join("\n");
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = +line;
  rl.close();
}).on("close", () => {
  console.log(solution(input));
  process.exit();
});
