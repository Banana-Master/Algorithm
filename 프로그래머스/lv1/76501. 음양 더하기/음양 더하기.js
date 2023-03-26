function solution(absolutes, signs) {
    for(let i = 0; i < signs.length; i++) {
        if(signs[i] == false) {
            absolutes[i] *= -1
        }
    }
    let sum = 0
    for(let i = 0; i < absolutes.length; i++) {
        sum += absolutes[i]
    }
    return sum;
}