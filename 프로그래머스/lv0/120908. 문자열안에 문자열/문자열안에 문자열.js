function solution(str1, str2) {
    let answer = str1.indexOf(str2) < 0 ? 2 : 1
    return answer;
}