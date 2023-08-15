function solution(arr, queries) {
    let result = [];
    queries.forEach((x) => {
        let s = x[0];
        let e = x[1];
        let k = x[2];
        let min = Infinity;
        for(let i = s; i <= e; i++) {
            if(arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        }
        if(min !== Infinity) {
            result.push(min);
            // arr = arr.filter((x) => x !== min)
        } else {
            result.push(-1);
        }
        
        
    })
    return result;
}