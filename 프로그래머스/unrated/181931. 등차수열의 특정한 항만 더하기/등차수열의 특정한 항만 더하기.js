function solution(a, d, included) {
    let num = 0;
    let result = 0;
    for(let i = 0; i < included.length; i++) {
        num = a + (d * i);
        if(included[i]) {
            result += num;
        }
    }
    return result;
}