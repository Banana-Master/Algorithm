const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  console.log(solution(line));

  rl.close();
}).on("close", function() {
  process.exit();
});


const solution = (input) => {
    let num = Number(input);
    let result = "long int";
    if(num === 4) {
        return result;
    } else {
        let count = (num / 4) - 1;
        return 'long '.repeat(count) + result;
    }
}