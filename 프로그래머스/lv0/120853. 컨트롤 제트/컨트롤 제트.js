function solution(s) {
    s = s.split(' ')
    let result = 0
    for(let i = 0; i < s.length; i++) {
        result += s[i] == 'Z' ? parseInt(-s[i-1]) : parseInt(s[i])
    }
    return result;
}