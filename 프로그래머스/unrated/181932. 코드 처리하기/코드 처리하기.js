function solution(code) {
    let ret = ''
    let mode = false;
    for(let i = 0 ; i < code.length; i++) {
        if(code[i] === '1' && mode ) {
            mode = false;
            continue;
        } else if(code[i] === '1' && !mode) {
            mode = true;
            continue;
        }
        if(mode) {
            if(i % 2 === 1) { ret += code[i] }
        } else {
            if(i % 2 === 0) { ret += code[i] }
        }
    }
    return ret !== '' ? ret : 'EMPTY';
}