function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        const arr2 =  arr.map((x) => {
            if(x >= 50 && x % 2 === 0) { return x / 2 } 
            else if(x < 50 && x % 2 === 1) { return x * 2 + 1 } 
            else { return x }
        })
        if(JSON.stringify(arr) === JSON.stringify(arr2)) { return i }
        else { arr = arr2 }
    }
    return arr;
}