const solution = (input) => {
    
	return Math.abs(input[0] - input[1]);
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

 
let input;

rl.on("line", function (line) {
    input = line.split(' ').map(Number);
    rl.close();

}).on("close", function () {
    console.log(solution(input));
    process.exit();

});