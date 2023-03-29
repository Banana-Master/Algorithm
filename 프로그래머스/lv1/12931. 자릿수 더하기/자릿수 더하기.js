const solution = (s) => {
    let arr = (s + '').split('')
    let answer = 0
    for(let i in arr) {
        answer += (parseInt(arr[i]));
    }
    return answer
}