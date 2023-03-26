function solution(cipher, code) {
    let answer = ''
    let arr = cipher.split('')
    for(let i = code -1; i < arr.length; i += code) {
        answer += arr[i]
    }
    return answer;
}