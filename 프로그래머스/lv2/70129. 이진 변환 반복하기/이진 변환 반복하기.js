function solution(s) {
    let x = [...s];
    let zero = 0;
    let count = 0;
    while(x.length > 1) {
        let x_length = x.length;
        x = x.filter((v) => v === '1');
        zero += x_length - x.length;
        count++;
        x = (x.length).toString(2).split('');
    }
    return [count, zero];
}