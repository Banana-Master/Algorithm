const solution = (input) => {
    let result = [];
    outerLoop: for(let i = 0; i < input.length; i++) {
        let arr = input[i].split('');
        let bracket = 0;
        if(arr.length % 2 === 1) {
            result.push('NO')
        } else {
            for(let j = 0; j < arr.length; j++) {
                if(arr[j] === '(') {
                    bracket++;
                } else if(arr[j] === ')') {
                    bracket--;
                }
                if(bracket < 0) {
                    result.push('NO')
                    continue outerLoop;
                }
            }
            if(bracket === 0) {
                result.push('YES')
            } else {
                result.push('NO')
            }
        }
    }
	return result.join('\n');
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

let list = [];
let countLine = 0;

rl.on("line", function (line) {
    if(countLine === 0) {
        countLine = Number(line);
    } else {
        list.push(line);
    }
    if(countLine === list.length) {
        rl.close();
    }

}).on("close", function () {
    console.log(solution(list));
    process.exit();

});