const solution = (input) => {
    let a = Math.min(...input);
    let b = Math.max(...input) * a;
    let result = a * b / gcd(a, b);
    
	return result;
}

function gcd(x, y) {
    if(y === 0) { return x}
    return gcd(y, x % y);
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});


let list = [];
let count = 0;

rl.on("line", function (line) {
    count++;
    if(count === 2) {
        list = line.split(' ').map(Number);
        rl.close();
    }

}).on("close", function () {
    console.log(solution(list));
    process.exit();

});