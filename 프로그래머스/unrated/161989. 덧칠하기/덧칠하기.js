function solution(n, m, section) {
    let wall = Array.from({ length : n }).fill(1);
    section.forEach((x) => {
        wall[x -1] = 0;
    })
    let count = 0;
    for(let i = 0; i < wall.length; i++) {
        if(wall[i] === 0) {
            count++;
            for(let j = i; j < i + m; j++) {
                wall[j] = 1;
            }
            i += m -1;
        }
    }
    return count;
}