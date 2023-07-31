const solution = (input) => {
    // 소수 개수를 계산하는 함수를 정의합니다.
    const countPrimesInRange = (start, end) => {
        // 소수를 저장할 배열을 초기화합니다.
        const primes = [];
        // start부터 end까지의 숫자들을 확인합니다.
        for (let num = start; num <= end; num++) {
            // 현재 숫자(num)가 소수인지 판별하는 변수를 초기화합니다.
            let isPrime = true;
            // 2부터 현재 숫자의 제곱근까지의 숫자들로 나누어 보면서 소수인지 확인합니다.
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    // 숫자가 2부터 제곱근까지의 숫자로 나누어 떨어지면 소수가 아닙니다.
                    isPrime = false;
                    // 더 이상 확인할 필요가 없으므로 반복문을 종료합니다.
                    break;
                }
            }
            // 현재 숫자가 소수이고 1보다 크다면, primes 배열에 추가합니다.
            if (isPrime && num > 1) {
                primes.push(num);
            }
        }
        // 소수의 개수를 반환합니다.
        return primes.length;
    };

    // 입력 배열의 각 요소에 대해 소수의 개수를 계산하고, 그 결과를 배열로 반환합니다.
    const result = input.map((x) => countPrimesInRange(x + 1, x * 2));
    return result.join('\n');
};



const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let input;
let list = [];
rl.on("line", function (line) {
    if(0 === Number(line)) {
        rl.close()
    } else {
        input = Number(line);
        list.push(input);
    }
}).on("close", function () {
    console.log(solution(list));
    process.exit();
});