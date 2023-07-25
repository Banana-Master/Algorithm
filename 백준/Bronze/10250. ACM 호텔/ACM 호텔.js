/* readline Module */

// 문제 풀이
function solution(input) {
    for (let i = 0; i < input.length; i++) {
        let H = input[i][0]; // 호텔의 층 수
        let W = input[i][1]; // 각 층의 방 수
        let N = input[i][2]; // 몇 번째 손님인지

        let floor = N % H === 0 ? H : N % H;
        let room = Math.ceil(N / H);

        console.log(floor * 100 + room);
    }
}




/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let list = [];
let linesToRead = 0; // 입력받아야 할 줄 수

rl.on("line", function (line) {
    if (linesToRead === 0) {
        linesToRead = parseInt(line);
        return;
    }

    input.push(line);
    if (input.length === linesToRead) {
        rl.close(); // 입력받을 줄 수를 다 받았으면 자동으로 rl.close() 호출
    }
}).on("close", function () {
    // 형변환, 구분자(띄어쓰기) 기준으로 배열에 삽입
    input.forEach((val) => {
        list.push(val.split(" ").map((el) => parseInt(el)));
    });

    solution(list); // 문제 풀이 함수 호출
    process.exit(); // 프로세스 종료
});