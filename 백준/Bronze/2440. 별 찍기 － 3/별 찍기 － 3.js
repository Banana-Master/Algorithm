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
    for(let i = input; i >= 0; i--) {
        console.log(('*').repeat(i))
    }
    process.exit();

});