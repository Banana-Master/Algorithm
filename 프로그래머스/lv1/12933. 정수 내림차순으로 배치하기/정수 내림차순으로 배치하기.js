function solution(n) {
    
    return Number([...n+''].sort((x, y) => y - x).join(''));
}