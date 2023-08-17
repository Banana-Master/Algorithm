function solution(n, arr1, arr2) {
    let result = [];
    let arr = Array.from({ length : n }).fill(' ');
    let one = arr1.map((x) => {
        let str = x.toString(2);
        if(str.length === n) {
            return str;
        } else {
            while(str.length !== n) {
                str = '0' + str;
            }
            return str;
        }
    });
    let two = arr2.map((x) => {
        let str = x.toString(2);
        if(str.length === n) {
            return str;
        } else {
            while(str.length !== n) {
                str = '0' + str;
            }
            return str;
        }
    });
    for(let i = 0; i < n; i++) {
        result[i] = [];
        for(let j = 0; j < n; j++) {
            if(one[i][j] === '1' || two[i][j] === '1') {
                result[i].push('#')
            } else {
                result[i].push(' ');
            }
        }
        result[i] = result[i].join('')
    }
    return result
}