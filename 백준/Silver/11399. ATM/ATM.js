const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;
let numbers;
rl.on("line", function (line) {
    if (!input) {
        input = parseInt(line); // 숫자의 개수를 입력받음
    } else {
        numbers = line.split(" ").map(Number);
        if (numbers.length === input) {
            // 문제 풀이 함수 호출
            rl.close(); // 입력 종료
        }
    }
}).on("close", function () {
    console.log(solution(numbers));
    process.exit(); // 프로세스 종료
});


const solution = (list) => {
    let result = 0;
    let sort = list.sort((x, y) => x - y);
    for(let i = 0; i < sort.length; i++) {
        result += sort[i] * (sort.length -i);
    }
    return result;
}