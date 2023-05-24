function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((x, y) => x + y) : num_list.reduce((x, y) => x * y)
}