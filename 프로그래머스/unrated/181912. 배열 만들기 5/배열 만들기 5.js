function solution(intStrs, k, s, l) {
    let result  = [];
    intStrs.forEach((x) => {
        let a = Number(x.slice(s, s + l));
        if(a > k) {
            result.push(a);
        }
    })
    return result;
}