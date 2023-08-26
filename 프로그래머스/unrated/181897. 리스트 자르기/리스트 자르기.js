function solution(n, slicer, num_list) {
    const [a, b, c] = slicer
    const result = [];
    switch(n) {
        case 1:
            for(let i = 0; i <= b; i++) {
                result.push(num_list[i]);
            }
            break;
        case 2:
            for(let i = a; i < num_list.length; i++) {
                result.push(num_list[i]);
            }
            break;
        case 3:
            for(let i = a; i <= b; i++) {
                result.push(num_list[i]);
            }
            break;
        case 4:
            for(let i = a; i <= b; i += c) {
                result.push(num_list[i]);
            }
    }
    return result;
}