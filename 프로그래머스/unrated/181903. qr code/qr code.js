function solution(q, r, code) {
    let arr = code.split('');
    result = '';
    for(let i = r; i < arr.length; i+=q) {
        result += arr[i];
    } 
    return result;
}