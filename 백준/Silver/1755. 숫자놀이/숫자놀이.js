const solution = (input) => {
    const number = ['zero', 'one', 'two',
        'three', 'four', 'five',
        'six', 'seven', 'eight',
        'nine'];
    const english_number = new Map();
    for (let i = input[0]; i <= input[1]; i++) {
        let 십의자리 = Math.floor(i / 10);
        let 일의자리 = i % 10;
        const arr = [];
        if (십의자리 !== 0) {
            arr.push(number[십의자리]);
        }
        arr.push(number[일의자리]);
        english_number.set(i, arr)
    }
    let sort = [...english_number.values()].sort((x, y) => x > y ? 1 : -1);
    let result = '';
    let count = 0;
    for (let i = 0; i < sort.length; i++) {
        if(count === 10) {
            result += '\n';
            count = 0;
        }
        for (const [key, value] of english_number.entries()) {
            if(JSON.stringify(value) === JSON.stringify(sort[i])) {
                count++;
                result += key + ' ';
                continue;
            }
        }
    }

    return result;
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input;
rl.on("line", function (line) {
    input = line.split(' ').map(Number);
    rl.close();
}).on("close", function () {
    console.log(solution(input));
    process.exit();
});