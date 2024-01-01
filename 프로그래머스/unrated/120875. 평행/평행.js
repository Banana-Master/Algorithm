function solution(dots) {
    let result = 0;
    
    result += checkParallel(dots[0], dots[1], dots[2], dots[3]);
    result += checkParallel(dots[0], dots[2], dots[1], dots[3]);
    result += checkParallel(dots[0], dots[3], dots[1], dots[2]);

    return result > 0 ? 1 : 0;
}

const checkParallel = (dot1, dot2, dot3, dot4) => {
    
    const xDiff = (dot1[0] - dot2[0]) / (dot3[0] - dot4[0]);
    const yDiff = (dot1[1] - dot2[1]) / (dot3[1] - dot4[1]);
    return xDiff === yDiff ? 1 : 0;
}
