const solution = (input) => {
	return [...new Set(input)].sort((x, y) => x - y).join(' ');
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

 
let input = [];
let count = 0;
rl.on("line", function (line) {
    count++;
    if(count === 2) {
        input = line.split(' ').map(Number);
        rl.close();
    }
    

}).on("close", function () {
    console.log(solution(input));
    process.exit();

});