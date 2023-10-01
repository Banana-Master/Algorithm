function solution(picture, k) {
    const result = [];
    picture.forEach((x, i) => {
        const arr = [...x];
        arr.forEach((y) => {
            if(!result[i]) {
                result[i] = y.repeat(k);
            } else {
               result[i] += y.repeat(k); 
            }
            
        })
    })
    const answer = [];
    result.forEach((x) => {
        for(let i = 0; i < k; i++) {
            answer.push(x)
        }
    })
    return answer;
}