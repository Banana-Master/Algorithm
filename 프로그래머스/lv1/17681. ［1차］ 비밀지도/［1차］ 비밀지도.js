function solution(n, arr1, arr2) {
    let result = [];
    let one = compare(arr1, n);
    let two = compare(arr2, n);

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

function compare(arr, n) {
    return arr.map((x) => {
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
}