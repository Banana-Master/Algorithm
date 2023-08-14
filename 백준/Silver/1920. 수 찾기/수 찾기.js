const solution = (input) => {
    let result = [];
    let N = input[1].sort((x, y) => x - y);
    let M = input[3];
    M.forEach((x) => {
        if(find(N, x)) {
            result.push(1);
        } else {
            result.push(0);
        }
    });
    return result.join('\n');
}

const find = (arr, num) => {
    let first = 0;
    let last = arr.length -1;
    while(first <= last) {
        let mid = Math.floor((first + last) / 2);

        if(arr[mid] === num) {
            return true;
        } else if(arr[mid] < num) {
            first = mid + 1;
        } else {
            last = mid -1;
        }
    }
    return false;
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

let list = [];

rl.on("line", function (line) {
    list.push(line.split(' ').map(Number));
    if(list.length === 4) {
        rl.close();
    }
}).on("close", function () {
    console.log(solution(list));
    process.exit();

});