const solution = (input) => {
    let num = 0;
    while(input > 0 && input >= num) {
        let arr = (num + '').split('').map(Number);
        const sum = arr.reduce((x, y) => x + y) + num;
        if(input === sum) break;
        num++;
    }
	return num > 0  && input > num ? num : 0;
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

 
let input;

rl.on("line", function (line) {
    input = Number(line);
    console.log(solution(input));
    rl.close();
}).on("close", function () {
    
    process.exit();

});