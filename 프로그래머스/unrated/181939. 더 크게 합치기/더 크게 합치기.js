function solution(a, b) {
    let x = (Number)(a+''+b);
    let y = (Number)(b+''+a);
    return x >= y ? x : y;
}