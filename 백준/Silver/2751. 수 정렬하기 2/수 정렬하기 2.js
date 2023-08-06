const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let N = 0; 
let list = [];
rl.on("line", function (line) {
    if(N === 0) {
        N = Number(line);
    } else {
        list.push(Number(line));
    }
    if(N === list.length) {
        rl.close();
    }
}).on("close", function () {
    console.log(solution(list));
    process.exit();
});


const solution = (input) => {
    
    let set = new Set(input);
    let sort = Array.from(set).sort((x, y) => x - y);
    return sort.join('\n');
}