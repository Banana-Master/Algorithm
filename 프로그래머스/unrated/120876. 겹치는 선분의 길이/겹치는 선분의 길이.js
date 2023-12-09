function solution(lines) {
    const stack = [];
    const linesObj = {};
    lines.forEach(([start, end]) => {
        for(let i = start; i < end; i++) {
            if(linesObj[i + 0.5] === undefined){
                linesObj[i + 0.5] = true;
            } else {
                if(!stack.includes(i + 0.5)){
                    stack.push(i + 0.5);
                }
            }
        }
    })
    const answer = stack.length;
    return answer;
}