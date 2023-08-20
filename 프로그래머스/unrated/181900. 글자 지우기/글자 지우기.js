function solution(my_string, indices) {
    let arr = [...my_string];
    for(let i in indices) {
        arr[indices[i]] = '';
    }
    return arr.join('')
}