function solution(my_string) {
    // 1 -> 49 , 9 -> 57
    let arr = my_string.split('')
    let result = 0
    for(let i = 0; i < my_string.length; i++) {
        let c = arr[i].charCodeAt() - '0'.charCodeAt()
        if(1 <= c && c <= 9) {
            result += c
        }
    }
    return result;
}