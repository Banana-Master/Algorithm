const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let count = 0;
let N = [];
let M = [];
rl.on("line", function (line) {
    count++;
    if(count === 2) {
        N = line.split(' ').map(Number);
    }
    if(count === 4) {
        M = line.split(' ').map(Number);
        rl.close();
    }
}).on("close", function () {
    let obj = {};
    N.forEach((x) => {
        if(obj[x] === undefined) {
            obj[x] = 1;
        } else {
            obj[x]++;
        }
    });
    let result = [];
    M.forEach((x) => {
        if(obj[x] === undefined) {
            result.push(0)
        } else {
            result.push(obj[x])
        }
    })
    console.log(result.join(' '));
    process.exit();
});