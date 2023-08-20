const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


let input = [];
let count = 0;
let count2 = 0;
rl.on("line", function (line) {
    if (count === 0) {
        count = Number(line);
    } else {
        input.push(line.split(' ').map(Number));
    }

    if (9 === input.length) {
        let Y = 0;
        let K = 0;
        input.forEach((x) => {

            let [y, k] = x;
            Y += y;
            K += k;
        })
        if (Y > K) {
            console.log('Yonsei')
        } else if (Y < K) {
            console.log('Korea')
        } else {
            console.log('Draw')
        }
        count2++;
        input = [];
    }
    if(count == count2) {
        rl.close();
    }
    

}).on("close", function () {

    process.exit();

});