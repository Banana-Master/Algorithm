function solution(score) {
    let point = {};
    
    for (let i = 0; i < score.length; i++) {
        point[i] = (score[i][0] + score[i][1]) / 2;
    }

    let sortedPoint = Object.keys(point).sort((a, b) => point[b] - point[a]);

    let result = new Array(score.length).fill(0);
    let rank = 1; 

    for (let i = 0; i < sortedPoint.length; i++) {
        let idx = Number(sortedPoint[i]);
        if (i > 0 && point[idx] < point[Number(sortedPoint[i - 1])]) {
            rank = i + 1;
        }
        
        result[idx] = rank;
    }
    return result
}