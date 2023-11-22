function solution(n, m) {
    const 최대공약수 = (a, b) => a % b === 0 ? b : 최대공약수(b, a % b);
    const 최소공배수 = (a, b) => a * b / 최대공약수(a, b);
    console.log(3 % 12)
    return [최대공약수(n, m), 최소공배수(n, m)];
}