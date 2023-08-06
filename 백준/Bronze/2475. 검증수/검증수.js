const solution = (input) => {
    let sum = 0;
    input.forEach((x) => {
        sum += x ** 2
    })
	return sum % 10;
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let list = [];

rl.on("line", function (line) {
    list = line.split(' ').map(Number)
    rl.close();

}).on("close", function () {
    console.log(solution(list));
    process.exit();

});