function solution(n) {
    let result = 1;
    let start = 1;
    while(start < n) {
        let num = 0;
        for(let i = start; i <= n; i++) {
            num += i;
            if(num === n) {
                result++;
            }
            if(num >= n) {
                break;
            }
        }
        start++;
    }
    return result;
}