function solution(s) {
    let arr = s.split(' ');
    let result = [];
    arr.forEach((x) => {
        let str = '';
        for(let i = 0; i < x.length; i++) {
            if(x[i] === ' ') {
                str += ' ';
            } else if(i % 2 === 0) {
                str += x[i].toUpperCase();
            } else if(i % 2 === 1) {
                str += x[i].toLowerCase();
            }
        }
        result.push(str)
    });
    return result.join(' ')
}
