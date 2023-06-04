function solution(my_string, is_prefix) {
    let endPoint = is_prefix.length;
    return (my_string.slice(0, endPoint) == is_prefix) ? 1 : 0;
}