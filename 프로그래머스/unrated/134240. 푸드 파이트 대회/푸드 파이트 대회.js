function solution(food) {
    let result = [];
    let food_count = food.slice(1);
    let i = 0;
    food_count.forEach((x) => {
        i++;
        if(x % 2 !== 0) {
            x--;
        }
        
        let str = (i + '').repeat(x / 2)
        result.push(str)
    })
    return `${result.join('')}0${result.reverse().join('')}`;
}