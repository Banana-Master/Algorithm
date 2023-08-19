function solution(s) {
    let x = [];
    let x_no = [];
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        if(x.length === 0) {
            x.push(s[i]);
        } else if(x[0] !== s[i]) {
            x_no.push(s[i]);
        } else if(x[0] === s[i]) {
            x.push(s[i]);
        }
        if(x.length === x_no.length) {
            result++;
            x = [];
            x_no = [];
        }
        
    }
    return x.length > 0 || x_no.length > 0 ? result + 1 : result;
}