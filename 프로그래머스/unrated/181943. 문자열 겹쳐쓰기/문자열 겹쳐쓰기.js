function solution(my_string, overwrite_string, s) {
    let result = my_string.split('');
    for(let i = s, j = 0; j < overwrite_string.length; i++, j++) {
        result[i] = overwrite_string[j];
    }
    return result.join('');
}