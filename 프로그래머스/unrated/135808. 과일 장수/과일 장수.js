function solution(k, m, score) {
    score.sort((x, y) => y - x);
    let start = 0;
    let goal = m;
    let result = 0;
    while(goal <= score.length) {
        let min = score.slice(start, goal)[m -1];
        result += min * m;
        start += m
        goal += m 
    }
    return result;
}