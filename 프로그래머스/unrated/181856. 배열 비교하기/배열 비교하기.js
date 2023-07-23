function solution(arr1, arr2) {
    let a = arr1.length;
    let b = arr2.length;
    if(a > b) {
        return 1;
    } else if(b > a) {
        return -1;
    } else {
        let x = arr1.reduce((a, b) => a + b, 0);
        let y = arr2.reduce((a, b) => a + b, 0);
        if(x > y) {
            return 1;
        } else if(y > x) {
            return -1;
        } else {
            return 0;
        }
    }
    
}