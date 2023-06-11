function solution(myString, pat) {
    let newString = [...myString].map(x => x === 'A' ? 'B' : 'A').join('');
    return newString.includes(pat) ? 1 : 0;
}