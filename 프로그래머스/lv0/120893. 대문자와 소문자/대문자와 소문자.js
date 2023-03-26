function solution(my_string) {
    // a -> 97 , A -> 65
    let result = ''
    for(let i = 0; i < my_string.length; i++) {
        let c = my_string[i].charCodeAt()
        // result += c >= 97 ? String.fromCharCode(c - 32) : String.fromCharCode(c + 32)
        result += c < 97 ? my_string[i].toLowerCase() : my_string[i].toUpperCase()
    }
    return result;
}