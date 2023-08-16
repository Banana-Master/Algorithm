function solution(arr) {
    let a = arr.length;
    let b = arr[0].length;
    for(let i = 1; i < a; i++) { // 길이 최대 값 찾기
        if(arr[i].length > b) {
            b = arr[i].length;
        }
    }
    let 길이 = Math.max(a, b);
    for(let i = 0; i < 길이; i++) {
        if(arr[i] === undefined) { 
            arr.push(Array(길이).fill(0)); 
        } 
        for(let j = 0; j < 길이; j++) {
            if(arr[i][j] === undefined) { 
                arr[i].push(0); 
            }
        }
    }
    return arr;
}