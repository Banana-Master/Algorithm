function solution(d, budget) {
    d.sort((x, y) => x - y);
    let arr = d.filter((x) => {
        if(budget - x >= 0) {
            budget -= x;
            return true;
        }
        return false;
        
    })
    return arr.length;
}