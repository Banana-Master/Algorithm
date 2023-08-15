function solution(l, r) {
    let result = [];
    let answer = [];
    for(let i = l; i <= r; i++) {
        result.push(i + '');
    }
    result.forEach((x) => {
        let count = 0;
        for(let i = 0; i < x.length; i++) {
            if(x[i] === '0' || x[i] === '5') {
                count++;
            }
        }
        if(count === x.length) {
            answer.push(Number(x));
        }
    });
    
    return answer.length !== 0 ? answer : [-1];
}