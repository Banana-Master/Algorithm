function solution(arr, queries) {
    queries.forEach((x) => {
        let [s, e, k] = x;
        for(let i = s; i <= e; i++) {
            if(i % k === 0){
                arr[i]++;
            }
        }
    })
    return arr;
}