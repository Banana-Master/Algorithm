function solution(s){
    let answer = true;
    let count1 = 0
    let count2 = 0
    let a = [...s.toLowerCase()]
    for(let i = 0; i < a.length; i++) {
        if(a[i]=='p') {
            count1++
        }
        if(a[i]=='y') {
            count2++
        }
    }
    answer = count1 == count2 ? true : false
    
    return answer;
}