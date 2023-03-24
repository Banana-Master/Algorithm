function solution(n) {
    let a = 1
    let answer = 2
    while(a * a <= n) {
        if(a * a == n) {
            answer = 1
            break;
        }
        a++
    }
    return answer;
}