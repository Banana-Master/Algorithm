function solution(absolutes, signs) {
    let num = absolutes.map((x, i) => x *= signs[i] ? 1 : -1);
    return num.reduce((x, y) => x + y);
}