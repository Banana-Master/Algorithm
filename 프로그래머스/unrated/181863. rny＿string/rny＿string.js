function solution(rny_string) {
    return [...rny_string].map(x => x === 'm' ? 'rn' : x).join('');
}