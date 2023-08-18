function solution(number, limit, power) {
    let result = 0;
    for(let i = 1; i <= number; i++) {
        result += limit >= 약수개수(i) ? 약수개수(i) : power; 
    }
    return result;
}

const 약수개수 = (num) => {
    if (num === 1) return 1;
    let count = 2;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (i === num / i) {
                count++;
            } else {
                count += 2;
            }
        }
    }
    
    return count;
}

