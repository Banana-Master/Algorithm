function solution(my_string, num1, num2) {
    let ver = ''
    let a = my_string.split('')
    ver = a[num1]
    a[num1] = a[num2]
    a[num2] = ver
    return a.join('');
}