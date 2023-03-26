function solution(array, n) {
    array = array.sort((a, b) => (a - b))
    let min = Math.abs(n - array[0])
    let answer = 0;
    for(let i = 1; i < array.length; i++) {
        if(min > Math.abs(n - array[i])) {
            min = Math.abs(n - array[i])
            answer = i
           }
    }
    
    return array[answer];
}