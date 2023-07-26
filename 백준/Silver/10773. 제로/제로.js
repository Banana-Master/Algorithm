/* readline Module */

// 문제 풀이
function solution(input) {
    let arr = [];
    input.forEach((x) => {
        if(x === '0') {
            arr.pop();
        } else {
            arr.push(x);
        }
    })
    let sum  = arr.reduce((x, y) => x + Number(y), 0);
    return sum;
    

}
/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let input = [];
let num = 0;

rl.on("line", function (line) {
    if (num === 0) {
        num = parseInt(line);
        return;
    }
    input.push(line);
    if (input.length === num) {
        rl.close(); // 입력받을 줄 수를 다 받았으면 자동으로 rl.close() 호출
    }
}).on("close", function () {
    console.log(solution(input)); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});