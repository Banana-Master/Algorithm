const josephus = (N, K) => {
    let result = [];
    let idx = 0;
    let people = Array.from({ length: N }, (_, idx) => idx + 1);
    while (people.length > 0) {
        idx = (idx + K - 1) % people.length;
        result.push(people.splice(idx, 1)[0]);
    }
    return `<${result.join(', ')}>`;
};

const solution = (input) => {
    const [N, K] = input;
    return josephus(N, K);
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let list = [];

rl.on('line', function (line) {
    list = line.split(' ').map(Number);
    console.log(solution(list));
    rl.close();
}).on('close', function () {
    process.exit();
});
