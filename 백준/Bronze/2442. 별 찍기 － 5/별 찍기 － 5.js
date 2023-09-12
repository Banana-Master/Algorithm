const solution = (input) => {
    const arr = [];
    for(let i = input - 1, j = 1; i >= 0; i--, j += 2) {
        arr.push(' '.repeat(i) + '*'.repeat(j))
    }
    return arr.join('\n');
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

 
let input;

rl.on("line", function (line) {
    input = Number(line);
    rl.close();
}).on("close", function () {
    console.log(solution(input));
    process.exit();
});