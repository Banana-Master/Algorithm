function solution(numbers) {
    let arr = numbers.sort((x, y) => x - y)
    return Math.max(arr[0]*arr[1], arr[arr.length-2]*arr[arr.length-1]);
}