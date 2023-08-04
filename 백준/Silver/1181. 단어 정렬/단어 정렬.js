const solution = (input) => {
    let arr = {};
    for(let i = 0; i < input.length; i++) {
        let length = input[i].length + '';
        
        if(arr[length] === undefined) {
            arr[length] = [input[i]];
        } else {
            arr[length].push(input[i]);
        }
    }
    let sort = Object.keys(arr).sort((x, y) => Number(x) - Number(y));
    let result = [];
    sort.forEach((x) => {
        let set = new Set(arr[x]);
        result.push(...Array.from(set).sort());

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
        list.push(line);
    }
    if(countLine === list.length) {
        rl.close();
    }

}).on("close", function () {
    console.log(solution(list));
    process.exit();

});