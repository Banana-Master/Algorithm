const solution = (n, left, right) => {

    const answer = [];

    while(left <= right) {
        let value = Math.max(...[Math.floor(left / n), left % n]);
        answer.push(value + 1);
        left += 1;
    }

    return answer;
}