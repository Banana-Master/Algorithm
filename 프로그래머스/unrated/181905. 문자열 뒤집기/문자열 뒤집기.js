function solution(my_string, s, e) {
    let front = my_string.slice(0, s);
    let back = my_string.slice(e + 1);
    let mid = [...my_string.slice(s, e + 1)].reverse().join('');
    return front + mid + back;
}