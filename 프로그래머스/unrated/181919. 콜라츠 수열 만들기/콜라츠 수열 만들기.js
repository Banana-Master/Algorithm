function solution(n) {
    let result = [];
    while(n !== 1) {
        result.push(n);
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    }
    result.push(1)
    return result;
}