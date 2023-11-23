function solution(n) {
    let result = 0;
    const n_count = n.toString(2).match(/1/g).length;
    for(let i = n + 1; true; i++) {
        const next = i.toString(2).match(/1/g).length;
        if(n_count === next) {
            result = i;
            break;
        }
    }
    return result;
}