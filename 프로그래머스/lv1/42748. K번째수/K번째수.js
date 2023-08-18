function solution(array, commands) {
    let result = [];
    commands.forEach(([i, j, k]) => {
        let arr_slice = array.slice(i -1, j);
        result.push(arr_slice.sort((x, y) => x - y)[k -1]);
    })
    return result;
}