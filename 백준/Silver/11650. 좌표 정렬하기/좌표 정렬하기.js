const solution = (input) => {
    const dots = {};
    let reuslt = [];
    input.forEach((a) => {
        let x = a[0];
        let y = a[1];
        if(dots[x] === undefined) {
            dots[x] = [];
            dots[x].push(y);
        } else {
            dots[x].push(y);
        }
    })
    let keySort = Object.keys(dots).map(Number).sort((x, y) => x - y);
    keySort.forEach((x) => {
        let val = dots[x].sort((x, y) => x - y);
        for(let i = 0; i < val.length; i++) {
            reuslt.push(`${x} ${val[i]}`);
        }
    })
	return reuslt.join('\n');
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

let list = [];
let countLine = 0;

rl.on("line", function (line) {
    if(countLine === 0) {
        countLine = Number(line);
    } else {
        list.push(line.split(' ').map(Number));
    }
    if(countLine === list.length) {
        rl.close();
    }

}).on("close", function () {
    console.log(solution(list));
    process.exit();

});