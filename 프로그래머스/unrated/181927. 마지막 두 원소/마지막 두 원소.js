function solution(num_list) {
    // 마지막 원소 번호
    let num = num_list.length-1;
    
    if(num_list[num] > num_list[num-1]) {
        num_list.push(num_list[num] - num_list[num-1])
    } else {
        num_list.push(num_list[num] * 2)
    }
    
    return num_list;
}