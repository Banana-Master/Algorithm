function solution(rank, attendance) {
    const map = new Map();
    for(let i = 0; i < rank.length; i++) {
        if(attendance[i] === true) {
            map.set(i, rank[i]);
        }
    }
    let sort = [];
    map.forEach((등수, 학생번호) => {
        sort.push(등수)
    })
    let result = 0;
    sort = sort.sort((x, y) => x - y).slice(0, 3);
    for (const [학생번호, 등수] of map.entries()) {
        if(sort.indexOf(등수) === 0) {
            result += 학생번호 * 10000;
        } else if(sort.indexOf(등수) === 1) {
            result += 학생번호 * 100;
        } else if(sort.indexOf(등수) === 2) {
            result += 학생번호
        }
    }
    return result
}