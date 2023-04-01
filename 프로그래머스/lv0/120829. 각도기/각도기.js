function solution(angle) {
    let answer = 1
    if(angle == 90) {
        answer = 2
    } else if(angle == 180) {
        answer = 4
    } else if(angle > 90) {
        answer = 3
    }
    return answer;
}