function solution(age) {
    // a -> 97
    let a = (age + '').split('')
    let result = ''
    for(let i = 0; i < a.length; i++) {
        result += String.fromCharCode(parseInt(a[i]) + 97)
    }
    return result
}