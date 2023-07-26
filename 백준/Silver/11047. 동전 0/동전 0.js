const readline = require("readline");

const rl = readline.createInterface({
    // 모듈을 이용해 입출력을 위한 인터페이스 객체 생성
    input : process.stdin,
    output : process.stdout,
})

// 생성한 rl 변수 사용하기

let num;
let K = 0;
let arr = [];
rl.on("line", (line) => {
    // 한 줄씩 입력받은 후 실행할 코드
    // 입력된 값은 line에 저장된다.
    if(num == null) {
        num = Number(line.split(' ')[0]);
        K = Number(line.split(' ')[1]);
    } else {
        arr.push(Number(line));
    }
    if(num == arr.length) {
        rl.close();
    }
});
rl.on('close', () => {
    console.log(solution(arr));
    process.exit();
});

const solution = (arr) => {
    let money = K;
    let count = 0;
    for(let i = arr.length -1; i >= 0; i--) {
        if(parseInt(money / arr[i]) > 0) {
            count += parseInt(money / arr[i]);
            money -= parseInt(money / arr[i]) * arr[i];
        }
    }
    return count;
}