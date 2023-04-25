function solution(num_list) {
    let a = even(num_list);
    let b = odd(num_list);
    return a >= b ? a : b;
}

const even = (num_list) => {
    let result = 0;
    for(let i = 0; i < num_list.length; i+=2) {
        result += num_list[i];
    }
    return result;
}

const odd = (num_list) => {
    let result = 0;
    for(let i = 1; i < num_list.length; i+=2) {
        result += num_list[i];
    }
    return result;
}