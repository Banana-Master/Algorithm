const solution = (input) => {
    let result = [];
    for(let i = 0; i < input.length; i++) {
        let s = `Case #${i + 1}: `
        s += reverse(input[i].toString());
        result.push(s);
    }
	return result.join('\n');
}
const reverse = (s) => {
    let result = '';
    let arr = s.split(' ');
    for(let i = arr.length -1; i >= 0; i--) {
        result += arr[i] + ' ';
    }
    return result.slice(0, -1);
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