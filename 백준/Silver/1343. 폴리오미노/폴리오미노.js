const solution = (input) => {
    let result = ''
    for(let i = 0; i < input.length; i++) {
        if(input[i].length % 2 === 1) {
            return -1;
        } else if(input[i].length === 0) {
            result += '.';
            continue;
        } else if(input[i].length === 2) {
            result += 'BB'
        } else if(input[i].length % 4 === 0) {
            result += 'AAAA'.repeat(input[i].length / 4)
        } else {
            result += 'AAAA'.repeat(parseInt(input[i].length / 4));
            result += 'BB';
        }
        result += '.'
    }
    result = result.split('')
    result.pop();
	return result.join('');
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

 
let input;

rl.on("line", function (line) {
    input = line.split('.');
    rl.close();

}).on("close", function () {
    console.log(solution(input));
    process.exit();

});