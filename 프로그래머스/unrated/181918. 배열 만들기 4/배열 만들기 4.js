function solution(arr) {
    let stk = [];
    let i = 0;
    while(arr.length > i) {
        if(stk.length === 0) {
            stk.push(arr[i]);
            i++;
        } else if(stk[stk.length -1] < arr[i]) {
            stk.push(arr[i]);
            i++;
        } else if(stk[stk.length -1] >= arr[i]) {
            stk.pop();
        }
    }
    return stk;
}