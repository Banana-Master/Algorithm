function solution(quiz) {
    let arr = []
    for(let i = 0; i < quiz.length; i++) {
        if(eval(quiz[i].split('=')[0]) == quiz[i].split('=')[1]) {
            arr.push('O')
        } else {
            arr.push('X')
        }
    }
    return arr;
}