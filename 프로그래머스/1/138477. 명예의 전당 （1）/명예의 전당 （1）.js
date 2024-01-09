function solution(k, score) {
    let result = [score[0]];
    let 명예의전당 = [score[0]];
    for(let i = 1; i < score.length; i++) {
        if(명예의전당[명예의전당.length -1] <= score[i] || 명예의전당.length !== k) {
            명예의전당.push(score[i]);
        }
        명예의전당.sort((x, y) => y - x);
        if(명예의전당.length > k) {
            명예의전당.pop()
        }
        result.push(명예의전당[명예의전당.length -1]);
    }
    return result;
}