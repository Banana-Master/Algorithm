const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let s = [];
rl.on('line', function(line) {
    s = line.replace(/[^a-zA-Z]/g, '').toUpperCase();
    rl.close();
}).on('close', function() {
    console.log(solution(s));
    process.exit();
});

const solution = (s) => {
    let result = {};
    let split = s.split('');
    split.forEach((x) => {
        if(result[x] === undefined) {
            result[x] = 1;
        } else {
            result[x]++;
        }
    })
    let val = Object.values(result).sort((x, y) => y - x);
    let max = -1;
    for(let i = 0; i < val.length; i++) {
        if(max === val[i]) {
            return '?';
        } else if(max < val[i]){
            max = val[i];
        }
    }
    return Object.keys(result).find((x) => result[x] === max);
}