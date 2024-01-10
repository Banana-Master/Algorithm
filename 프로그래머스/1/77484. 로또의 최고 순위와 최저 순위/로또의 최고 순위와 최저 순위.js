function solution(lottos, win_nums) {
    let result = [0, 0];
    lottos.forEach((x) => {
        if(x === 0) {
            result[0]++;
        } else if(win_nums.includes(x)) {
            result[0]++;
            result[1]++;
        }
    })
    const rank = [6, 5, 4, 3, 2];
    let max = rank.indexOf(result[0]) !== -1 ? rank.indexOf(result[0]) +1: 6;
    let min = rank.indexOf(result[1]) !== -1 ? rank.indexOf(result[1]) +1: 6;
    return [max, min];
}