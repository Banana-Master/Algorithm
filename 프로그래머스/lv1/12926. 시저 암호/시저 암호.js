function solution(s, n) {
    let result = '';
    [...s].forEach((x) => {
        let char = x.charCodeAt();
        if(x === ' ') {
            result += ' ';
        } else {
            for(let i = 0; i < n; i++) {
                if(char === 'z'.charCodeAt()) {
                    char = 'a'.charCodeAt();
                } else if(char === 'Z'.charCodeAt()) {
                    char = 'A'.charCodeAt();
                } else {
                    char++;
                }
            }
            result += String.fromCharCode(char);
        }
        
    })
    return result;
}