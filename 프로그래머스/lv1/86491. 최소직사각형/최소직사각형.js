function solution(sizes) {
    let [x, y] = [0, 0]
    for(let i = 0; i < sizes.length; i++) {
        sizes[i] = sizes[i].sort((x, y) => x - y);
        if(x < sizes[i][0]) {
            x = sizes[i][0];
        }
        if(y < sizes[i][1]) {
            y = sizes[i][1];
        }
    }
    return x * y;
}