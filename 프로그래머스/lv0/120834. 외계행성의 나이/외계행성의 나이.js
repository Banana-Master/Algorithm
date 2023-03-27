function solution(age) {
    // a -> 97
    age = age + ''
    let answer = age.split('')
    let result = ''
    for(let i = 0; i < answer.length; i++) {
        result += String.fromCharCode(parseInt(answer[i]) + 97)
    }
    return result
}