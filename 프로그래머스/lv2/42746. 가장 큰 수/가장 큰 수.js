function solution(numbers) {
    const numString = numbers.map(String);
    numString.sort((x, y) => (y + x) - (x + y));
    return numString[0] === '0' ? '0' : numString.join('');
}