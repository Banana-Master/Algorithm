function solution(my_str, n) {
    let result = []
    let a = 0
    for(let i = 0; i < my_str.length; i+=n) {
        result.push(my_str.substr(a, n))
        a += n
    }
    
    return result;
}