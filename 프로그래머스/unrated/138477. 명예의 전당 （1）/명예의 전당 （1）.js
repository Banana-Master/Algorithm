function solution(k, score) {
    let result = [score[0]];
    let the_Hall_of_Fame = [score[0]];
    for(let i = 1; i < score.length; i++) {
        if(Math.min(...the_Hall_of_Fame) <= score[i] || the_Hall_of_Fame.length !== k) {
            the_Hall_of_Fame.push(score[i]);
        }
        the_Hall_of_Fame.sort((x, y) => y - x);
        if(the_Hall_of_Fame.length > k) {
            the_Hall_of_Fame.pop()
        }
        result.push(Math.min(...the_Hall_of_Fame));
    }
    return result;
}