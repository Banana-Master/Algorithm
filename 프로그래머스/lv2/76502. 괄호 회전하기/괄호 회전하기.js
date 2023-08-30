function solution(s) {
    const pair = {
        '[' : ']',
        '(' : ')',
        '{' : '}'
    };
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        const stack = [];
        for(let j = 0; j < s.length; j++) {
            const location = (j + i) >= s.length ? (j + i) - s.length : j + i;
            if ( Object.values(pair).includes(s[location]) && stack.length === 0 ) {
                break;
            } else if ( Object.keys(pair).includes(s[location]) ) {
                stack.push(s[location])
            } else if ( Object.values(pair).includes(s[location]) ) {
                const stackLast = Object.keys(pair).find(key => pair[key] === s[location]);
                if(stackLast === stack[stack.length -1]) {
                    stack.pop();
                }
            } 
            if (stack.length === 0 && j === s.length - 1) {
                result++;
            }
        }
    }
    return result;
}