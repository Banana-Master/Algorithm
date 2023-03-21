function solution(hp) {
    let five = parseInt(hp / 5)
    let three = parseInt(hp % 5 / 3)
    let one = parseInt(hp % 5 % 3 / 1)
    return five + three + one;
}