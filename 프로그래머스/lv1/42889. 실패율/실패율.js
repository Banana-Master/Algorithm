

function solution(N, stages) {
    const fail = new Map();
    for (let i = 1; i <= N; i++) {
        let count = stages.filter((x) => x === i).length;
        let players = stages.filter((x) => x >= i).length;
        let failRate = 0;
        if (players !== 0) {
            failRate = count / players;
        }
        fail.set(i, failRate);
    }
    console.log(fail.entries())
    let result = [...fail.entries()].map(([stage, rate]) => ({ stage, rate }));
    result.sort((a, b) => {
        if (a.rate > b.rate) return -1;
        if (a.rate < b.rate) return 1;
        return a.stage - b.stage;
    });
    return result.map((x) => x.stage);
}
