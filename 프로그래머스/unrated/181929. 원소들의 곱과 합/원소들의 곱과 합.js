function solution(num_list) {
    let a = num_list.reduce((x, y) => x * y, 1)
    let b = (num_list.reduce((x ,y) => x + y, 0)) ** 2;
    return a < b ? 1 : 0;
}