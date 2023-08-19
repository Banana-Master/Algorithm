function solution(numbers) {
    return 45 - numbers.reduce((x, y) => x + y);
}