function solution(numLog) {
    let result = '';
    for(let i = 0; i < numLog.length -1; i++) {
        let cal = numLog[i] - numLog[i + 1];
        if(cal === -1) {
            result += 'w';
        } else if(cal === 1) {
            result += 's';
        } else if(cal === -10) {
            result += 'd';
        } else if(cal === 10) {
            result += 'a'
        }
    }
    return result;
}