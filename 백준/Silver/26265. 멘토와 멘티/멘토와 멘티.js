const solution = (input) => {
    // 멘토를 키로, 멘티를 값으로 가지는 Map을 생성합니다.
    let mentorMap = new Map();

    // 입력으로 주어진 순서쌍들을 이용하여 mentorMap에 멘토와 멘티들을 저장합니다.
    input.forEach((x) => {
        let [mentor, mentee] = x;
        if (!mentorMap.has(mentor)) {
            mentorMap.set(mentor, []);
        }
        mentorMap.get(mentor).push(mentee);
    });

    // 멘토들을 사전 순으로 정렬합니다.
    let mentors = Array.from(mentorMap.keys()).sort();

    // 정렬된 결과를 저장할 배열을 초기화합니다.
    let result = [];

    // 각 멘토별로 멘티들을 사전 역순으로 정렬하여 결과 배열에 추가합니다.
    for (let mentor of mentors) {
        let mentees = mentorMap.get(mentor).sort((x, y) => y.localeCompare(x));
        for (let mentee of mentees) {
            result.push(`${mentor} ${mentee}`);
        }
    }

    // 결과 배열을 개행으로 구분하여 문자열로 반환합니다.
    return result.join('\n');
};

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

let list = [];
let count = 0;
let N;
rl.on("line", function (line) {
    if(count === 0) {
        N = Number(line);
    } else {
        let arr = line.split(' ');
        list.push([arr[0], arr[1]]);
    }
    
    if(count === N) { rl.close(); }
    count++;

}).on("close", function () {
    console.log(solution(list));
    process.exit();
});