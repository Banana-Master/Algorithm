function solution(before, after) {
    let before1 = before.split('')
    let after1 = after.split('')
    let before2 = 0
    let after2 = 0
    for(let i = 0; i < before.length; i++) {
        before2 += before1[i].charCodeAt()
        after2 += after1[i].charCodeAt()
    }
    let answer = before2 == after2 ? 1 : 0
    return answer;
    
}