function solution(my_string) {    
    let num = my_string.match(/[0-9]+/g)
    return num ? num.reduce((x, y) => x*1 + y*1, 0) : 0;
}