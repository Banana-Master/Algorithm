function solution(numlist, n) {
    
    return numlist.sort((x, y) => Math.abs(n - x) - Math.abs(n - y) || y - x);
}