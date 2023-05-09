function solution(a, b, c) {
    if(a != b && b != c && c != a) {
        return a + b + c;
    } else if(a == b && b == c && c == a) {
        return (a + b + c) * (a * a + b * b + c * c) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
    } else {
        return (a + b + c) * (a * a + b * b + c * c);
    }
    
}