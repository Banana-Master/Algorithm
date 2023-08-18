function solution(s) {
    const obj = {};
    const result = [];
    for(let i = 0; i < s.length; i++) {
        if(obj[s[i]] === undefined) {
            obj[s[i]] = i;
            result.push(-1)
        } else {
            let num = i - obj[s[i]];
            result.push(num);
            obj[s[i]] = i;
        }
    }
    return result;
}