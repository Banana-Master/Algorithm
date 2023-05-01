function solution(a, b) {
    if(a % 2 === 1 && b % 2 === 1) {
        // 둘다 홀수
        return (a * a) + (b * b);
    } else if(a % 2 === 0 && b % 2 === 0) {
        // 모두 홀수가 아닌 경우
        return Math.abs(a - b);
    } else {
        // 둘중 하나만 홀수 인 경우
        return 2 * (a + b);
    }
}