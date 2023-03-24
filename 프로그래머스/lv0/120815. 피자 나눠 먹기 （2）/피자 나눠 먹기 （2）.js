function solution(n) {
    let answer = 1
    
    while(true) {
        let result = answer * 6
        if(result % n == 0) {
            break;
        } else {
            answer++
        }
    }
    return answer;
}