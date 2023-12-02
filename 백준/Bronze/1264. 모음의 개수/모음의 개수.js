const solution = (input) => {
  let vowel = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  const result = [];
  input.forEach((x) => {
    for(let i = 0;  i < x.length; i++) {
        if(vowel[x[i]] >= 0) {
            vowel[x[i]]++;
        }
    }
    result.push([...Object.values(vowel)].reduce((x, y) => x + y, 0));
    vowel = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  });
  return result.join('\n');
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const list = [];

rl.on("line", function (line) {
  if (line === "#") {
    rl.close();
  } else {
    list.push(line.toLowerCase());
  }
}).on("close", function () {
  console.log(solution(list));
  process.exit();
});
