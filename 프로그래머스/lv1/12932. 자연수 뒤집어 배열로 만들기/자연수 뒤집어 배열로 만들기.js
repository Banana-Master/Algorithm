function solution(n) {
    
    return [...n+''].reverse().map(str => parseInt(str));
}