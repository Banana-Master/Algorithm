const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let arr = [];
rl.on('line', function(line) {
    if(line !== ' ') {
        arr = line.trim().split(' ');
    }
    rl.close();
}).on('close', function() {
    console.log(arr.length);
    process.exit();
})