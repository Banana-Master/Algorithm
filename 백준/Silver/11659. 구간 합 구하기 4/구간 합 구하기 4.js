const solution = (input) => {
    let arr = input[0];
    let result = [arr[0]];
    let s = '';
    for(let i = 1; i < arr.length; i++) {
        result.push(result[i - 1] + arr[i]);
    }
    for(let i = 1; i < input.length; i++) {
        let a = input[i][0] - 1;
        let b = input[i][1] - 1;
        let x = 0;
        if(a === 0) { x = 0; } 
        else { x = result[a - 1]; }
        let y = result[b];
        s += y - x + '\n';
    }
	return s.slice(0, -1);
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

let list = [];
let count = 0;
let breakPoint = 0;

rl.on("line", function (line) {
    if(count === 0) {
        breakPoint = Number(line.split(' ')[1]) + 1;
    } else {
        list.push(line.split(' ').map(Number));
    }
    
    if(count === breakPoint) { rl.close(); }
    count++;

}).on("close", function () {
    console.log(solution(list));
    process.exit();
});