const solution = (input) => {
    let first = BigInt(0);
    let last = BigInt(1);
    for(let i = 1; i < input; i++) {
        let num = first;
        first = last;
        last = last + BigInt(num);
    }
	return last;
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

 
let input;

rl.on("line", function (line) {
    input = Number(line);
    rl.close();

}).on("close", function () {
    console.log(solution(input).toString());
    process.exit();

});