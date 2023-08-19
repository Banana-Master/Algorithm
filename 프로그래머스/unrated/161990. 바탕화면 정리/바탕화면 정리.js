function solution(wallpaper) {
    let x = [];
    let y = [];
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#') {
                y.push(i)
                x.push(j)
            }
        }
    }
    x.sort((x, y) => x - y);
    y.sort((x, y) => x - y);
    let x_min = x[0];
    let y_min = y[0];
    let x_max = x[x.length -1] + 1;
    let y_max = y[y.length -1] + 1;
    return [y_min, x_min, y_max, x_max]
}