function solution(num_list, n) {
    let a = num_list.splice(n);
    let b = num_list.splice(0, n);
    return a.concat(b);
}