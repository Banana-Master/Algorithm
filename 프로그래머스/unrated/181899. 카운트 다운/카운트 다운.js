function solution(start, end) {
    let result = [];
    for(start; start>=end; start--) {
        result.push(start)
    }
    return result;
}