function solution(s, skip, index) {
    const s_arr = s.split('').map((x) => x.charCodeAt());
    const skip_arr = skip.split('').map((x) => x.charCodeAt());
    const result = [];
    for(let i = 0; i < s_arr.length; i++) {
        let a = s_arr[i];
        
        let count = 0;
        while(count !== index) {
            a++
            if(a > 122) { a -= 26 }
            if(!skip_arr.includes(a)) { count++ }
        }
        
        result.push(String.fromCharCode(a));
    }
    return result.join('');
}