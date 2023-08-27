function solution(arr, query) {
    let result = [...arr];
    query.forEach((x, i) => {
        if(i % 2 === 0) {
            result = result.slice(0, x + 1);
        } else {
            result = result.slice(x, result.length)
        }
    })
    return result;
}