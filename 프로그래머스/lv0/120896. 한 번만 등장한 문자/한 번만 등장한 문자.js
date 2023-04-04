const solution = (s) => {
    let result = ''
    for(let i = 0; i < s.length; i++) {
        result += s.split(s[i]).length == 2 ? s[i] : '';
    }
    return [...result].sort().join('');
}