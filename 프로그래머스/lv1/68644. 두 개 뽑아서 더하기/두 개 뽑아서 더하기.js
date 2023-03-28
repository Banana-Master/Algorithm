function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length-1; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(i != j) {
                answer.push(numbers[i] + numbers[j])
            } 
        }
    }
    let result = [...new Set(answer)];
    return result.sort((x,y)=>x-y);
}