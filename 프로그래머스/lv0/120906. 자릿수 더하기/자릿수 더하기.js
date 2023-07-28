function solution(n) {
    let arr = [...n + ''.split('')].map(Number)
    let result = 0;
    arr.forEach((x) => {
        result += x;
    })
    return result;
}