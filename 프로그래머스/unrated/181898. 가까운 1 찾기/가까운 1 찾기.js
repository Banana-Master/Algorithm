function solution(arr, idx) {
    for(idx; idx < arr.length; idx++) {
        if(arr[idx] === 1) {
            return idx;
        }
    }
    return -1;
}