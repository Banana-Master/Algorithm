function solution(numbers) {
    let add = 45 // 1 ~ 9까지의 합
    for(let i = 0; i < numbers.length; i++) {
        add -= numbers[i]
    }
    return add;
}