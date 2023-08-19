function solution(numbers) {
    let add = 45 // 1 ~ 9까지의 합
    numbers.forEach((x) => {
        add -= x;
    })
    return add;
}