function solution(babbling) {
    let result = 0;
    for(let i = 0; i < babbling.length; i++) {
        if(search(babbling[i])) {
            result++
        }
    }
    return result;
}

const 발음종류 = ["aya", "ye", "woo", "ma"];

const search = (str) => {
    const arr = [...발음종류];
    while(str !== '') {
        const three = [...str].slice(0, 3).join('');
        const two = [...str].slice(0, 2).join('');
        if(three === arr[0]) {
            str = [...str].splice(3).join('');
            arr[0] = 0;
            arr[1] = 발음종류[1]
            arr[2] = 발음종류[2]
            arr[3] = 발음종류[3]
        } else if(three === arr [2]) {
            str = [...str].splice(3).join('');
            arr[2] = 0
            arr[0] = 발음종류[0]
            arr[1] = 발음종류[1]
            arr[3] = 발음종류[3]
        } else if(two === arr[1]) {
            str = [...str].splice(2).join('')
            arr[1] = 0;
            arr[0] = 발음종류[0]
            arr[2] = 발음종류[2]
            arr[3] = 발음종류[3]
        } else if(two === arr[3]) {
            str = [...str].splice(2).join('')
            arr[3] = 0;
            arr[0] = 발음종류[0]
            arr[1] = 발음종류[1]
            arr[2] = 발음종류[2]
        } else {
            return false;
        }
    }
    return true
}