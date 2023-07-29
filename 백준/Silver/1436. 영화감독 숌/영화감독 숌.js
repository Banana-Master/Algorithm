const solution = (input) => {
    
	let start = 666;
    let count = 0;
    while(true) {
        if((''+start).includes('666')) {
            count++;
        }
        
        if(count === Number(input)) {
            return start;
        }
        start++;
    }
    
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

 
let input;

rl.on("line", function (line) {
    input = line;
    rl.close();

}).on("close", function () {
    console.log(solution(input));
    process.exit();

});