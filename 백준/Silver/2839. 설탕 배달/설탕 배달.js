const sugarDelivery = (sugar) => {
    let bag = 0;

    while(sugar >= 0) {
        if(sugar % 5 === 0) {
            bag += sugar / 5;
            break;
        } else {
            sugar -= 3;
            bag += 1;
        }
    }
    return sugar >= 0 ? bag : -1;
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout,

});

let input;

rl.on("line", function (line) {
    
    input = line;           // 입력받은 문자열, line
    input = parseInt(line); // 형변환, parseInt
    rl.close();             // 입력 종료

}).on("close", function () {

    console.log(sugarDelivery(input)); // 문제 풀이 함수 호출
    process.exit();  // 프로세스 종료

});