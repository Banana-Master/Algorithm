const solution = (input) => {
    let result = [];
    input.forEach((x) => {
        let sort = x.sort((x, y) => y - x);
        result.push(sort[2]);
    });
	return result.join('\n');
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

 

let list = [];
let count = 0;
let endPoint = 0;

rl.on("line", function (line) {
    if(endPoint === 0) {
        endPoint = Number(line);
    } else {
        list.push(line.split(' ').map(Number));
    }
    
    if(count === endPoint) {
        rl.close();
    }
    
    count++;
    

}).on("close", function () {
    console.log(solution(list));
    process.exit();

});