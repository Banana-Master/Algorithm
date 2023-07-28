function solution(chicken) {
    let result = 0;
    let coupon = chicken;
    
    while(coupon >= 10) {
        result += parseInt(coupon / 10);
        coupon = coupon % 10;
        coupon += parseInt(chicken / 10);
        chicken = coupon;
    }
    
    return result;
}