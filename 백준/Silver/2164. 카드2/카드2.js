class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function card2(N) {
    // 선형 연결 리스트 생성
    let head = new Node(1);
    let current = head;
    for (let i = 2; i <= N; i++) {
        current.next = new Node(i);
        current = current.next;
    }

    // 리스트의 끝에서 두 번째 노드를 찾아서 제거하는 작업
    let prev = null;
    current.next = head; // 리스트를 원형 연결 리스트로 만들기 위해 마지막 노드를 처음 노드를 가리키도록 설정

    while (current.next !== current) {
        prev = current;
        current = current.next;
        prev.next = current.next; // 두 번째 노드와 연결
        current = prev.next; // 다음 노드로 이동
    }

    return current.value; // 마지막에 남은 카드의 숫자 반환
}

/* readline Module */
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

    console.log(card2(input)); // 문제 풀이 함수 호출
    process.exit();  // 프로세스 종료

});