function solution(common) {
    const minus = common[1] - common[0] === common[2] - common[1];
    if(minus) {
        return common[common.length-1] + common[1] - common[0];
    } else {
        return common[common.length-1] * (common[1] / common[0]);
    }
}