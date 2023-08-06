const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a = '';
rl.on("line", function (line) {
    a = line;
    rl.close();
}).on("close", function () {
    console.log(a.length);
    process.exit();
});