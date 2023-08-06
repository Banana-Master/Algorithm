const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let num;

rl.on("line", function (line) {
    num = Number(line);
    rl.close();
}).on("close", function () {
    let result = '';
    for(let i = 1; i <= num; i++) {
        result += i + '\n'
    }
    console.log(result);
    process.exit();

});