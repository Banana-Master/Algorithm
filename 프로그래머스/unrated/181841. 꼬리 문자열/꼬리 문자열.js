function solution(str_list, ex) {
    let result = '';
    str_list.reduce((_, x) => x.includes(ex) ? '': result += x, 0);
    return result;
}