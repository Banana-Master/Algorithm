let deque = [];
let result = [];
const solution = (input) => {
    input.forEach((x) => {
        switch (x[0]) {
            case 'push_front':
                deque.unshift(x[1]);
                break;
            case 'push_back':
                deque.push(x[1]);
                break;
            case 'pop_front':
                if(deque.length === 0) {
                    result.push('-1');
                } else {
                    result.push(deque[0]);
                    deque.shift();
                }
                break;
            case 'pop_back':
                if(deque.length === 0) {
                    result.push('-1');
                } else {
                   result.push(deque[deque.length -1]);
                    deque.pop(); 
                }
                break;
            case 'size':
                result.push(deque.length);
                break;
            case 'empty':
                result.push(deque.length === 0 ? 1 : 0);
                break;
            case 'front':
                if(deque.length === 0) {
                    result.push('-1');
                } else {
                   result.push(deque[0]);
                }
                break;
            case 'back':
                if(deque.length === 0) {
                    result.push('-1');
                } else {
                   result.push(deque[deque.length -1]);
                }
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
