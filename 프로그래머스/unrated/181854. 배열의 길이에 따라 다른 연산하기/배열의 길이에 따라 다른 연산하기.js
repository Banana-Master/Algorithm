function solution(arr, n) {
    let i = 0;
    if(arr.length % 2 === 0) {
        i = 1;
    }
    for(i ; i < arr.length; i += 2) {
        arr[i] += n;
    }
    return arr;
}