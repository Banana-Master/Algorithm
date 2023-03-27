function solution(x, n) {
    let answer = []
    let a = x
    for(let i = 0; i < n; i++) {
        answer[i] = a
        a += x
    }
    return answer;
}