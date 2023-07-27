function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function binomialCoefficient(N, K) {
    if (K < 0 || K > N) {
        return 0;
    }
    let numerator = 1;
    let denominator = 1;
    for (let i = N; i > N - K; i--) {
        numerator *= i;
    }
    denominator = factorial(K);
    return numerator / denominator;
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const solution = (input) => {
    let list = input.split(" ");
    let N = Number(list[0]);
    let K = Number(list[1]);
    let result = binomialCoefficient(N, K);
    return result;
};

rl.on("line", function (line) {
    console.log(solution(line));
    rl.close();
});
