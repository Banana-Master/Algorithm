function solution(s){
    let stack = [];
    
    if(s[0] === ')' || s[s.length -1] === '(') {
        return false;
    } else {
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '(') {
                stack.push(s[i]);
            } else {
                if(stack.length === 0) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
        return stack.length === 0 ? true : false;
    }
    
}