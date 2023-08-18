function solution(s) {
//     let arr = [...s];
//     for(let i = 0, j = 1; i < arr.length; i+=2, j+=2) {
//         if(arr[i] >= 'a' && arr[i] <= 'z' && arr[i] !== ' ') {
//             arr[i] = arr[i].toUpperCase();
//         }

//         if(arr[j] >= 'A' && arr[j] <= 'Z' && arr[j] !== ' ') {
//             arr[j] = arr[j].toLowerCase();
//         }
//     }
//     return arr.join('');
    let arr = s.split(' ');
    let result = [];
    arr.forEach((x) => {
        let str = '';
        for(let i = 0; i < x.length; i++) {
            if(x[i] === ' ') {
                str += ' ';
            } else if(i % 2 === 0) {
                str += x[i].toUpperCase();
            } else if(i % 2 === 1) {
                str += x[i].toLowerCase();
            }
        }
        result.push(str)
    });
    return result.join(' ')
}