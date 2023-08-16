function solution(a, b, c, d) {
    let arr = [a, b, c, d];
    let result = 0;
    let dice_count = {};
    for(let i = 0; i < arr.length; i++) {
        if(dice_count[arr[i]] === undefined) {
            dice_count[arr[i]] = 1;
        } else {
            dice_count[arr[i]]++;
        }
    }
    let key = Object.keys(dice_count);
    if(key.length === 1) { // 모두 똑같은 주사위일 때
        result = 1111 * a;
    } else if(key.length === 2) {
        
        let value = Object.values(dice_count).sort((x, y) => x - y); 
        let p = Number(Object.keys(dice_count).find((x) => dice_count[x] === value[1]));
        let q = Number(Object.keys(dice_count).find((x) => dice_count[x] === value[0]));
        if(p !== q) {
            result = ((10 * p) + q) ** 2;
        } else {
            [p, q] = Object.keys(dice_count).map(Number)
            result = (p + q) * Math.abs(p - q);
        }
    } else if(key.length === 3) {
        Object.keys(dice_count).find((x) => dice_count[x] !== 2)
        let [p, q] = Object.keys(dice_count).filter((x) => dice_count[x] !== 2).map(Number);
        result = p * q;
    } else {
        result = Math.min(...arr);
    }
    return result;
}