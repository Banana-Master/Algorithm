function solution(arr, divisor) {
    let answer = []
    for(let i in arr) {
        if(arr[i] % divisor == 0) {
            answer.push(arr[i])
        }
    }
    
    return answer.length > 0 ? answer.sort((x, y) => x - y) : [-1];
}