function solution(a, b) {
    if(b === 0) { return 2 }
    let gcd = 1;
    for(let i = 2; i <= Math.min(a, b); i++){
        if(a % i === 0 && b % i === 0){
            gcd = i;
        }
    }
    a /= gcd;
    b /= gcd;

    while(b % 2 === 0) b /= 2;
    while(b % 5 === 0) b /= 5;
    if(b === 1) { return 1 }
    return 2;
}