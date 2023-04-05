function solution(num) {
    let result = 0
    while(num != 1) {
        num = num % 2 == 0 ? num / 2 : (num * 3) + 1;
        result++
        if(result == 500) {
            result = -1
            break;
        }
    }
    return result;
}