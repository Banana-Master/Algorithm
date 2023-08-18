function solution(answers) {
    const 수포자1 = [1, 2, 3, 4, 5];
    const 수포자2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const 수포자3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let [count1, count2, count3] = Array.from({length:3}).fill(0);
    for(let i = 0; i < answers.length; i++) {
        count1 += answer_count(수포자1, answers, i, count1);
        count2 += answer_count(수포자2, answers, i, count2);
        count3 += answer_count(수포자3, answers, i, count3);
    }
    const maxCount = Math.max(count1, count2, count3);
    const answer = [];

    if (count1 === maxCount) answer.push(1);
    if (count2 === maxCount) answer.push(2);
    if (count3 === maxCount) answer.push(3);

    return answer;
}

const answer_count = (person, answers, i, count) => {
    let j = i;
    if(i >= person.length) {
        j = i % person.length;
    }
    if(person[j] === answers[i]) {
        return 1;
    }
    return 0;
}