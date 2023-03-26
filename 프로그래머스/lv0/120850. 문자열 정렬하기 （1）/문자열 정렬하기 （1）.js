function solution(my_string) {
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let arr = []
    for(let j = 0; j < my_string.length; j++) {
       for(let i = 0 ; i < num.length; i++) {
            if(my_string[j] == num[i]) {
                arr.push(i)
            }
        } 
    }
    return arr.sort();
}