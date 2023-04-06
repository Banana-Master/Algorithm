const solution = (sides) => {
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    let count = 0
    // sides의 큰 값이 가장 긴 변일 경우
    for(let i = max; i > max - min; i--) {
        count++
    }
    // 나머지 한 변이 가장 긴 변일 경우
    for(let i = max + 1; i < max + min; i++) {
        count++
    }
    return count;
}