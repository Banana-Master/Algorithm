function solution(numbers, k) {
    let num = (k-1) * 2
    num = num > numbers.length ? num % numbers.length : num
    return numbers[num];
}