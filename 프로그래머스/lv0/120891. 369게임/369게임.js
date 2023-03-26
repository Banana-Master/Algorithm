function solution(order) {
    let a = order + ''
    let arr = a.split('')
    let answer = 0
    for(let i = 0; i < arr.length; i++) {
        answer += arr[i] == '3' || arr[i] == '6' || arr[i] == '9' ? 1 : 0
    }
    return answer;
}