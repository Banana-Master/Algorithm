function solution(strArr) {
    let result = strArr.map(x => x.toLowerCase());
    for(let i = 1; i < strArr.length; i+=2) {
        result[i] = strArr[i].toUpperCase();
    }
    return result;
}