function solution(my_string) {
    let answer = my_string.trim('').split(' ');
    return answer.filter(num => num != '');
}

