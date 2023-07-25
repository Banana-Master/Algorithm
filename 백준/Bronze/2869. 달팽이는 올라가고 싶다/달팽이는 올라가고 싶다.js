const snail = (arr) => {
    a = arr[0]
    b = arr[1]
    v = arr[2]
    day = (v - b) / (a - b)

    if (day % 1 == 0) {
        return parseInt(day)
    } else {
        return parseInt(day) + 1
    }       
}

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
    
});


let input;
let list = [];

rl.on("line", function (line) {

    input = line; // 입력받은 문자열, line
    rl.close();   // 입력 종료
    
}).on("close", function () {

    // 형변환, 구분자(띄어쓰기)기준으로 배열에 삽입
    list = input.split(' ').map((el) => Number(el));
    console.log(snail(list)); // 문제 풀이 함수 호출
    process.exit(); // 프로세스 종료
});