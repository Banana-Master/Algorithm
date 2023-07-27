// 유클리드 호제법으로 최대공약수(GCD)를 구하는 함수
const gcd = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};

const solution = (input) => {
    let a = input[0];
    let b = input[1];

    // 최대공약수(GCD) 계산
    let num = gcd(a, b);

    console.log(num);
    console.log((a * b) / num);
};

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let list = [];

rl.on("line", function (line) {
    list = line.split(' ').map((x) => Number(x)).sort((x, y) => x - y);
    rl.close();
}).on("close", function () {
    solution(list);
    process.exit();
});
