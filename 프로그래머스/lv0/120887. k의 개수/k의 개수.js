function solution(i, j, k) {
    let count = 0
    for(i; i <= j; i++) {
        i += ''
        k += ''
        for(let a = 0; a < i.length; a++) {
            if(i[a].indexOf(k) == false) {
                count++
            }
        }
        parseInt(i)
        
    }
    return count;
}