function solution(s) {
    let en = ['zero','one','two','three','four','five','six','seven','eight','nine']
    let num = ['0','1','2','3','4','5','6','7','8','9']
    for(let i = 0; i < en.length; i++) {
        s = s.replaceAll(en[i],num[i])
    }
    return parseInt(s);
}