/* readline Module */

// 문제 풀이
function solution(input) {
    let count = 0;
    for(let i = 0; i < input.length; i++) {
        for(let j = 0, k = 1; j < input[i].length; j+=2, k+=2) {
            // j는 짝수 줄, k는 홀수 줄
            // 짝수 줄 : 검 흰 검 흰 검 흰 검 흰
            // 홀수 줄 : 흰 검 흰 검 흰 검 흰 검
            if(i % 2 == 0 &&input[i][j] == 'F') {
                count++;
            }
            if(i % 2 == 1 && input[i][k] == 'F') {
                count++;
            }
        }
    }
    return count;
}

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
   input.push(line) // 입력받은 여러줄, line
   // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
   if(input.length === 8) {
    rl.close();
   }

}).on("close", function () {
    console.log(solution(input)); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});
