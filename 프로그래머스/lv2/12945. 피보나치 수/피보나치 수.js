function solution(n) {
    const arr = [0, 1];
    while(arr.length !== n) {
        let first = BigInt(arr[arr.length -2]);
        let last = BigInt(arr[arr.length -1]);
        arr.push((BigInt(first) % 1234567n + BigInt(last) % 1234567n) % 1234567n);
    }
    return (BigInt(arr[arr.length - 2]) + BigInt(arr[arr.length - 1])) % 1234567n;
}
// (A + B) % C = ( ( A % C ) + ( B % C) ) % C