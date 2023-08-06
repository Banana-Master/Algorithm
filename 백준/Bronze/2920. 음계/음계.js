const solution = (input) => {
    let arr = [...input].sort((x, y) => x - y);
    if(arr.join(',') === input.join(',')) {
        return 'ascending';
    } else if(arr.join(',') === [...input].reverse().join(',')) {
        return 'descending';
    } else {
        return 'mixed';
    }
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let list = [];

rl.on("line", function (line) {
    list = line.split(' ').map(Number);
    rl.close();
}).on("close", function () {
    console.log(solution(list));
    process.exit();

});
