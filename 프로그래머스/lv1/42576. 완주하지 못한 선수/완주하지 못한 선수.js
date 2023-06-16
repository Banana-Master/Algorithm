function solution(participant, completion) {
    let answer = '';
    let count = {};

    // 참가자의 이름을 카운트에 추가
    for (let i = 0; i < participant.length; i++) {
        let name = participant[i];
        if (count[name]) { // 동명이인이 있을 경우 대비
            count[name] += 1;
        } else {
            count[name] = 1;
        }
    }

    // 완주한 선수의 이름을 카운트에서 감소
    for (let j = 0; j < completion.length; j++) {
        let completeName = completion[j];
        count[completeName] -= 1;
    }

    // 카운트가 0이 아닌 선수가 완주하지 못한 선수
    for (let name in count) {
        if (count[name] !== 0) {
            answer = name;
            break;
        }
    }

    return answer;
}
