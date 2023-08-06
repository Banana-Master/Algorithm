const solution = (input) => {
    let M = input[0];
    let arr = input[1].sort((x, y) => x - y);
    let result = 0;
    let i = 0;
    let j = N - 1;
    while(i < j) {
        if(arr[i] + arr[j] < M) { i++; }
        else if(arr[i] + arr[j] > M) { j--; }
        else { 
            result++;
            i++;
            j--;
        }
    }
	return result;
}
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let N = 0; 
let count = 0;
let list = [];
rl.on("line", function (line) {
    if(N === 0) {
        N = Number(line);
    } else {
        list.push(line.split(' ').map(Number));
    }
    if(count === 2) {
        rl.close();
    }
    count++;
}).on("close", function () {
    console.log(solution(list));
    process.exit();
});