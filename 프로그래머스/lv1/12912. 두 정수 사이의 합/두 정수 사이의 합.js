function solution(a, b) {
    let max = a >= b ? a : b
    let min = a < b ? a : b
    let result = 0
    for(let i = min; i <= max; i++) {
        result += i
    }
    return result;
}