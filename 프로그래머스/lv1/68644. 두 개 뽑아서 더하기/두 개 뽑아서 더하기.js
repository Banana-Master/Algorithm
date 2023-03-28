function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length-1; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(i != j) {
                answer.push(numbers[i] + numbers[j])
            } 
        }
    }
    let set = new Set(answer);
    let uniqueArr = [...set];
    return uniqueArr.sort((x,y)=>x-y);
}