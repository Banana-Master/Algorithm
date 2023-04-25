function solution(n_str) {
    let findIndex = [...n_str].find((x) => x != 0);
    let result = n_str.indexOf(findIndex);
    return n_str.slice(result);
}