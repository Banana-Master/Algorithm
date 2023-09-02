function solution(strArr) {
    const strLength = {}
    strArr.forEach((item) => {
        const itemLength = item.length
        if(!strLength[itemLength]) {
            strLength[itemLength] = 0;
        }
        strLength[itemLength]++;
    })
    return Math.max(...Object.values(strLength));
}