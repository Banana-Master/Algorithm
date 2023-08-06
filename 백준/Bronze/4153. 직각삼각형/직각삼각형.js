const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let list = [];

rl.on("line", function (line) {
    if(line === '0 0 0') {
        rl.close();
    }
    list.push(line.split(' ').map(Number));
}).on("close", function () {
    
    console.log(solution(list));
    process.exit();

});

const solution = (list) => {
    let result = '';
    list.forEach((x) => {
        let sort = x.sort((x, y) => x - y);
        if(sort[0] ** 2 + sort[1] ** 2 === sort[2] ** 2) {
            result += 'right' + '\n'
        } else {
            result += 'wrong' + '\n'
        }
    })
    return result;
}