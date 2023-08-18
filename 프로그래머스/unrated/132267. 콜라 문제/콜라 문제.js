function solution(a, b, n) {
    let result = [];
    let bottle = n;
    while(bottle >= a) {
        if(bottle % a === 0) {
            bottle = (bottle / a) * b;
            result.push(bottle)
        } else {
            let num = bottle % a
            bottle = Math.floor(bottle / a) * b;
            result.push(bottle);
            bottle += num;
        }
    
    }
    return result.reduce((x, y) => x + y, 0);
}