function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++) {
        let first = queries[i][0];
        let last = queries[i][1];
        let temp_num = arr[first];
        arr[first] = arr[last];
        arr[last] = temp_num;
    }
    return arr;
}