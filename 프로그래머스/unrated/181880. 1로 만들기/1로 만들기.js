function solution(num_list) {
    
    let result = [];
    num_list.forEach((x) => {
        let count = 0;
        while(x !== 1) {
            if(x % 2 === 0) {
                x /= 2;
            } else {
                x = (x - 1) / 2;
            }
            count++;
        }
        result.push(count)
    })
    return result.reduce((x, y) => x + y, 0);
}