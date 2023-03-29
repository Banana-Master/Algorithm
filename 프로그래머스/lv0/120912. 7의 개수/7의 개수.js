function solution(array) {
    let count = 0
    for(let i = 0; i < array.length; i++) {
        array[i] += ''
        let a = array[i].split('')
        for(let j = 0; j < a.length; j++) {
            if(a[j] === '7') {
                count++
            }
        }
    }
    return count;
}
