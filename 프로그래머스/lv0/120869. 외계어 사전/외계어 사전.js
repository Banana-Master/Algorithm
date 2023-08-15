function solution(spell, dic) {
    for (let x = 0; x < dic.length; x++) {
        let obj = {};
        for (let i = 0; i < dic[x].length; i++) {
            for (let j = 0; j < spell.length; j++) {
                if (spell[j] === dic[x][i]) {
                    if (obj[spell[j]] === undefined) {
                        obj[spell[j]] = 0;
                    }
                    obj[spell[j]]++;
                }
            }
        }
        let result = Object.values(obj);
        if (result.length === spell.length && result.every((x) => x === 1)) {
            return 1;
        }
    }
    return 2;
}
