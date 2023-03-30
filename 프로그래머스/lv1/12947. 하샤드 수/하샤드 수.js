function solution(x) {
    return x % [...x + ''.split('')].map((n) => Number(n)).reduce((a, b) => a + b) == 0;
}