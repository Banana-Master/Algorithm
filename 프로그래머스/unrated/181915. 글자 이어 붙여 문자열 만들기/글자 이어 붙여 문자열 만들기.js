function solution(my_string, index_list) {
    let result = '';
    index_list.forEach((x) => {
        result += my_string[x];
    })
    return result;
}