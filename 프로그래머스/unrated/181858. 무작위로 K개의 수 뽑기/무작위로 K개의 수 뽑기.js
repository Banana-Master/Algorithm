function solution(arr, k) {
    const arrSet = [...new Set(arr)]
    if(arrSet.length >= k) {
        return arrSet.slice(0, k)
    } else {
        const a = k - arrSet.length;
        const b = Array.from({length: a}).fill(-1)
        return arrSet.concat(b)
    }

}