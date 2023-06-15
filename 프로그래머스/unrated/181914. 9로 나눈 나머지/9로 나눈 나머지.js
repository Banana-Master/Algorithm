function solution(number) {
    let num = [...number].reduce((x, y) => Number(x) + Number(y));
    return num % 9;
}