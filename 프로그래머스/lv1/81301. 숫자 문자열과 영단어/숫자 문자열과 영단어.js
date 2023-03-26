function solution(s) {
    let en = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for(let i = 0; i < en.length; i++) {
        s = s.replaceAll(en[i],i)
    }
    return parseInt(s);
}