const solution = (input) => {
    const btns = [300, 60, 10];
    let counts = [0, 0, 0];
    for (let i = 0; i < btns.length; i++) {
        counts[i] += Math.floor(input / btns[i]);
        input %= btns[i];
    }
    return input == 0 ? counts.join(' ') : -1;
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let input;

rl.on("line", function (line) {
    input = Number(line);
    rl.close();

}).on("close", function () {
    console.log(solution(input));
    process.exit();

});