function solution(my_string) {
    let answer = my_string.split(' ');
    return answer.filter(num => num != '');
}

