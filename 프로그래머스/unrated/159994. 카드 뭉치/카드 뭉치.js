function solution(cards1, cards2, goal) {
    for(let i = 0; i < goal.length;) {
        if(goal[i] === cards1[i]) {
            goal.shift();
            cards1.shift();
            i = 0;
        } else if(goal[i] === cards2[i]) {
            goal.shift();
            cards2.shift();
            i = 0;
        } else {
            i++;
        }
    }
    return goal.length === 0 ? "Yes" : "No";
}