function solution(want, number, discount) {
    const itemCount = new Map();
    want.forEach((x, i) => {
        itemCount[x] = number[i];
    });
   
    
    let result = 0;
    
    for(let i = 0; discount.length - 10 >= i; i++) {
        const discountList = new Map();
        for(let j = 0; j < 10; j++) {
            if(!discountList[discount[j + i]]) {
                discountList[discount[j + i]] = 1;
            } else {
                discountList[discount[j + i]]++;
            }
        }
        let state = 0;
        want.forEach((x) => {
            if(itemCount[x] === discountList[x]) state++;
        });
        if(state === want.length) result++;
    }
    
    return result;
}