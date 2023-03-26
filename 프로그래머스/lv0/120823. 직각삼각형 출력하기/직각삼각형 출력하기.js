const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    a = Number(input[0])
    let answer = ''
    for(let j = 0; j < a; j++) {
        for(let i = 0; i <= j; i++) {
        	answer += '*'
    	}
        answer += '\n'
    }
    console.log(answer)
});