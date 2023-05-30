function solution(num_str) {
    let splitNum = num_str.split('');
    let result = splitNum.map(x => Number(x));
    return result.reduce((x, y) => x + y);
}