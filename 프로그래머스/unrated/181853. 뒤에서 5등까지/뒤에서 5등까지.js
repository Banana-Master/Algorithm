function solution(num_list) {
    let result = [...num_list].sort((x, y) => x - y);
    return result.slice(0, 5);
}