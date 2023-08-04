const solution = (input) => {
    let num = Number(input[0]);
    let result = [];
    for(let i = 0; i < input[1].length; i++) {
        let s = [];
        for(let j = 1; j <= num; j++) {
            s.push(input[j][i]);
        }
        const unique = new Set(s);
        if(unique.size === 1) {
            result.push(Array.from(unique)[0]);
        } else {
            result.push('?');
        }
    }
	return result.join('');
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

let list = [];
let count = 0;
let goal = 0;

rl.on("line", function (line) {
    list.push(line);
    if(list[0] == count) {
        rl.close();
    }
    count++;


}).on("close", function () {
    console.log(solution(list));
    process.exit();

});