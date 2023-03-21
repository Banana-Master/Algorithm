function solution(num, k) {
    let answer = String(num).split('');
    let result = -1;
    for(let i = 0; i < answer.length; i++) {
        let a = parseInt(answer[i]);
        if(a==k) {
            result = i+1;
            break;
        }
    }
    return result;
}