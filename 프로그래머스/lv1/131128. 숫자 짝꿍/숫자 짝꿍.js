function solution(X, Y) {
    const obj1 = {};
    [...X].forEach((x) => {
        if(!obj1[x]) {
            obj1[x] = 0;
        }
        obj1[x]++;
    });
    const obj2 = {};
    [...Y].forEach((x) => {
        if(!obj2[x]) {
            obj2[x] = 0;
        }
        obj2[x]++;
    })
    const key1 = Object.keys(obj1); // 문자배열
    const key2 = Object.keys(obj2);
    const result = [];
    key1.forEach((x) => {
        if(key2.includes(x)) {
            const min = Math.min(obj1[x], obj2[x]);
            if(min !== 0) {
                for(let i = 0; i < min; i++) {
                    result.push(x);
                }
            } else {
                result.push(x)
            }
        }
    })
    result.sort((x, y) => x > y ? -1 : 1);
    let answer = result.length === 0 ? "-1" : result.join('')
    if (/^[0]*$/.test(answer)) {
        return "0";
    } else {
        return answer
    }
    
}