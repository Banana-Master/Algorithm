function solution(polynomial) {
    let arr = polynomial.split(' ');
    let X = 0;
    let num = 0;
    arr.forEach((x) => {
        if(x.includes('x')) {
            if(x.split('')[0] === 'x') {
                X++;
            } else if(x.split('x')[0] !== '+') {
                X += Number(x.split('x')[0])
            }
        } else if(x !== '+') {
            num += Number(x)
        }
    })
    if(X === 1 && num === 0) { return 'x' } 
    if(X > 0 && num > 0) {
        if(X === 1) {
            return `x + ${num}`
        }
        return `${X}x + ${num}`
    }
    if(X > 0) { return `${X}x` }
    if(num > 0) { return `${num}` }
    return '';
}