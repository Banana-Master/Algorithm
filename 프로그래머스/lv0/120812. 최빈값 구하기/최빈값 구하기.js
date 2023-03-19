function solution(array) {

    let freqMap = {};
    let maxCount = 0;
    let mode = [];

    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        freqMap[el] = (freqMap[el] || 0) + 1;
        if (freqMap[el] > maxCount) {
            maxCount = freqMap[el];
            mode = [el];
        } else if (freqMap[el] === maxCount) {
            mode.push(el);
        }
    }

    return mode.length > 1 ? -1 : mode[0];
}