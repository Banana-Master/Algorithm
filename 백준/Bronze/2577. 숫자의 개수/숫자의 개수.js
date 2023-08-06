const solution = (input) => {
    let multiplication = input[0] * input[1] * input[2] + '';
    let num = {
        '0' : 0,
        '1' : 0,
        '2' : 0,
        '3' : 0,
        '4' : 0,
        '5' : 0,
        '6' : 0,
        '7' : 0,
        '8' : 0,
        '9' : 0
    }
    let arr = multiplication.split('');
    arr.forEach((x) => {
        num[x]++;
    });
    return Object.values(num).join('\n');
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let list = [];

rl.on("line", function (line) {
    list.push(Number(line));
    if(list.length === 3) {
        rl.close();
    }
    

}).on("close", function () {
    console.log(solution(list));
    process.exit();

});