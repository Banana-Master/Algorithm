function solution(arr) {
    return arr.map(x => {
        if(x >= 50 && x % 2 == 0) {
        // 50보다 크거나 같고 짝수인 것
            return x /= 2;
        } else if(x < 50 && x % 2 == 1) {
            // 50보다 작고 홀수 인것
            return x *= 2;
        } else {
            return x;
        }           
    });
}