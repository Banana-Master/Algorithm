function solution(a, b) {
    let x = Number(a + '' + b);
    let y = 2 * a * b;
    return x >= y ? x : y;
}