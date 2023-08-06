const solution = (save, search) => {
	let info = {};
    save.forEach((x) => {
        let site = x.split(' ')[0];
        let password = x.split(' ')[1];
        info[site] = password;
    });
    let result = [];
    for(let i = 0; i < search.length; i++) {
        result.push(info[search[i]]);
    }
    return result.join('\n');
}
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let N = 0;
let M = 0;
let list1 = [];
let list2 = [];

rl.on("line", function (line) {
    if(N === 0) {
        N = Number(line.split(' ')[0]);
        M = Number(line.split(' ')[1]);
    } else if(list1.length < N) {
        list1.push(line);
    } else if(list2.length < M) {
        list2.push(line);
    }
    if(list2.length === M) {
        rl.close();
    }

}).on("close", function () {
    console.log(solution(list1, list2));
    process.exit();

});