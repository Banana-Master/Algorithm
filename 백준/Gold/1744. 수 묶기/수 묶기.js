const solution = (input) => {
    const num_object = {
        '-' : [],
        '0' : 0,
        '1' : 0,
        '+' : []
    }
    input.forEach((x) => {
        if(x < 0) {
            num_object['-'].push(x);
        } else if(x === 0) {
            num_object['0']++;
        } else if(x === 1) {
            num_object['1']++;
        } else if(x > 0) {
            num_object['+'].push(x);
        }
    });
    num_object['+'] = num_object['+'].sort((x, y) => x - y);
    num_object['-'] = num_object['-'].sort((x, y) => y - x);
    let result = 0;
    // 음수 처리
    if(num_object['-'].length === 1){ // 1개
        if(!num_object['0'] > 0) { // 0이 하나도 없을 때
            result += num_object['-'][0];
        }
    } else if(num_object['-'].length % 2 === 0) { // 짝수
        for(let i = 0; i < num_object['-'].length -1; i+=2) {
            result += num_object['-'][i] * num_object['-'][i + 1];
        }
    } else if(num_object['-'].length % 2 === 1) { // 홀수
        if(!num_object['0'] > 0) { // 0이 하나도 없을 때
            result += num_object['-'][0];
        }
        for(let i = 1; i < num_object['-'].length -1; i+=2) {
            result += num_object['-'][i] * num_object['-'][i + 1];
        }
    }
    // 양수 처리
    if(num_object['+'].length === 1) { // 1개
        result += num_object['+'][0]
    } else if(num_object['+'].length % 2 === 0) { // 짝수
        for(let i = 0; i < num_object['+'].length -1; i+=2) {
            result += num_object['+'][i] * num_object['+'][i + 1];
        }
    } else if(num_object['+'].length % 2 === 1) { // 홀수
        result += num_object['+'][0];
        for(let i = 1; i < num_object['+'].length -1; i+=2) {
            result += num_object['+'][i] * num_object['+'][i + 1];
        }
    }
    result += num_object['1']; // 1남은거 더해주기
	return result;
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
        list.push(Number(line));
    }
    if(countLine === list.length) {
        rl.close();
    }

}).on("close", function () {
    console.log(solution(list));
    process.exit();
});