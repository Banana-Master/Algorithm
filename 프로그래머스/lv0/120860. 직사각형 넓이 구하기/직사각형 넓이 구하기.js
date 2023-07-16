function solution(dots) {
    let sort = dots.sort();
    let width = Math.abs(sort[2][0] - sort[0][0]);
    let height = Math.abs(sort[1][1] - sort[0][1]);
    return width * height;
}