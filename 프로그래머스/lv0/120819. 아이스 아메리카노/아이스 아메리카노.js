function solution(money) {
    let count = 0
    while(money >= 5500) {
        count += 1
        money -= 5500
    }
    let result = [count, money];
    return result;
}