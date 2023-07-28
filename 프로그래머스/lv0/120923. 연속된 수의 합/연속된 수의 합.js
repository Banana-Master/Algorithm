function solution(num, total) {
    let result = 0;
    let i = 1;
    for(i; i <= num; i++) {
        result += i;
    }
    i = (total - result) / num + 1;
    let answer = [];
    for(let y = 0; y < num; y++) {
        answer.push(i);
        i++;
    }
    return answer;
}