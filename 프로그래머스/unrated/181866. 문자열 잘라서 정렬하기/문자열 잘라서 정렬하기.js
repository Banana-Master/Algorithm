function solution(myString) {
    return myString.split('x').filter((x) => x !== '').sort((x, y) => x > y ? 1 : -1);
}