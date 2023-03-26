function solution(babbling) {
    let arr = ['aya', 'ye', 'woo', 'ma']
    for(let i = 0; i < babbling.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            babbling[i] = babbling[i].replaceAll(arr[j], '0')
        }
    }
    let answer = 0
    for(let i = 0; i < babbling.length; i++) {
        if(Number(babbling[i]) == 0 && babbling[i] != '0e0') {
            answer++
        }
    }
    return answer;
}