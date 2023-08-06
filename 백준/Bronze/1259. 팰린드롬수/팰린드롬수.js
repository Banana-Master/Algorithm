

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

rl.on("line", function (line) {
    if(line == 0) {
        rl.close();
    }
    let string = line;
    let reverse = string.split('').reverse().join('');
    console.log(string === reverse ? 'yes' : 'no');

}).on("close", function () {
    process.exit();
});