function solution(s) {
    return s.split('').sort((x, y) => x < y ? 1: -1).join('');
}