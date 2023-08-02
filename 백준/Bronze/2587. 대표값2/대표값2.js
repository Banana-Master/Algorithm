const solution = (input) => {
	input.sort();
    let result = '';
    result += input.reduce((x, y) => x + y) / 5 + '\n';
    result += input[2];
    return result;
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

let list = [];

rl.on("line", function (line) {
    list.push(Number(line))
    if(list.length === 5) {
        rl.close();
    }

}).on("close", function () {
    console.log(solution(list));
    process.exit();

});