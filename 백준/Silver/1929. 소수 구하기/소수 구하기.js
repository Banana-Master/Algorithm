const isPrime = (n) => {
    // 만약 숫자가 1보다 작거나 같으면 소수가 아닙니다.
    if (n <= 1) return false;
    // 숫자가 2 또는 3이면 소수입니다.
    if (n <= 3) return true;
    // 숫자가 2 또는 3의 배수라면 소수가 아닙니다.
    // 이 부분은 반복문에서 확인되지 않으므로 따로 처리합니다.
    if (n % 2 === 0 || n % 3 === 0) return false;
    // 이제 소수가 되는 숫자들은 모두 (6k ± 1) 형태로 나타낼 수 있습니다.
    // 여기서 k는 양의 정수입니다.
    // 5부터 (6k - 1) 형태인 수들로 나누어 떨어지는지 검사합니다.
    // 소수인지 확인하기 위해서는 숫자의 제곱근까지만 검사하면 됩니다.
    for (let i = 5; i * i <= n; i += 6) {
        // 만약 숫자가 i 또는 i + 2로 나누어 떨어진다면 소수가 아닙니다.
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    // 반복문을 마치고도 약수를 찾지 못했다면 주어진 숫자는 소수입니다.
    return true;
};

const solution = (input) => {
    const [start, end] = input;
    let result = "";
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            result += i + "\n";
        }
    }
    return result;
};

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let list = [];

rl.on('line', function(line) {
    list = line.split(' ').map(Number);
    rl.close();
}).on('close', function() {
    console.log(solution(list));
    process.exit();
});

