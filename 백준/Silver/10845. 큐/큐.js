let queue = [];
let result = [];
const solution = (input) => {
    input.forEach((x) => {
        let state = x[0];
        switch (state) {
            case 'push':
                queue.push(x[1]);
                break;
            case 'pop':
                if(queue.length !== 0) {
                    result.push(queue[0]);
                    queue.shift();
                } else {
                    result.push(-1);
                }
                break;
            case 'size':
                result.push(queue.length);
                break;
            case 'empty':
                result.push(queue.length === 0 ? 1 : 0);
                break;
            case 'front':
                result.push(queue.length !== 0 ? queue[0] : -1);
                break;
            case 'back':
                result.push(queue.length !== 0 ? queue[queue.length -1] : -1);
                break;
        }
    });
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
        list.push(line.split(' '));
    }
    if(countLine === list.length) {
        rl.close();
    }

}).on("close", function () {
    console.log(solution(list));
    process.exit();

});
