function solution(my_string) {
    let arr = my_string.split(' ')
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == '+') {
            arr.splice(0, 3, parseInt(arr[i-1]) + parseInt(arr[i+1]));
            i = 0
        } 
        else if(arr[i] == '-') {
            arr.splice(0, 3, parseInt(arr[i-1]) - parseInt(arr[i+1]));
            i = 0
        }
    }
    return Number(arr);
}