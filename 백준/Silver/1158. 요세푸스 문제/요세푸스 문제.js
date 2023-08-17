const solution = (input) => {
    let [N, K] = input;

    const 요세푸스 = (N, K) => {
        const queue = Array.from({length : N}, (_, i) => i + 1);
        const result = [];
    
        let index = 0;
        while (queue.length > 0) {
            index = (index + K - 1) % queue.length;
            result.push(queue.splice(index, 1)[0]);
        }
    
        return result;
    };
    
    const 요세푸스결과 = 요세푸스(N, K);
    return `<${요세푸스결과.join(', ')}>`;
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let list = [];


rl.on("line", function (line) {
    list = line.split(' ').map(Number)
    rl.close();


}).on("close", function () {
    console.log(solution(list));
    process.exit();

});