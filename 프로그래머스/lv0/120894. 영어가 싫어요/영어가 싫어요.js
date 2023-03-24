function solution(numbers) {
    let numStr = [ "zero", "one", "two", "three", "four", 
                  "five", "six", "seven", "eight", "nine" ];
    for(let i = 0; i < numbers.length || i < 10; i++) {
        let a = String(i)
        numbers = numbers.replaceAll(numStr[i], a)
        
        
    }
    return parseInt(numbers);
}