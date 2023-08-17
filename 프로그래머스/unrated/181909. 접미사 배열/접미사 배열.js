function solution(my_string) {
    let result = [];
    let start = my_string.length - 1;
    let last = my_string.length ;
    for(let i = 0; i < my_string.length; i++) {
        let slice = my_string.slice(start, last);
        result.push(slice);
        start--;
    }
    return result.sort((x, y) => x > y ? 1 : -1);
}