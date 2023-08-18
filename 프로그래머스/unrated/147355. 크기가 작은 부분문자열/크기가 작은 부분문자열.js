function solution(t, p) {
    let count = 0;
    for(let i = 0; i < t.length - p.length + 1; i++) {
        let slice_num = Number(t.slice(i, i + p.length));
        if(slice_num <= Number(p)) {
            count++;
        }
    }
    return count;
}