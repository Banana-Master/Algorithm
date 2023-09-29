function solution(arr) {
    let num = 1;
    while(arr.length > 2 ** num) {
        num++;
        console.log(num)
    }
    const length = 2 ** num;
    const a = length - arr.length;
    const b = Array.from({ length: a }).fill(0);
    return arr.length === 1 ? arr : arr.concat(b);
}