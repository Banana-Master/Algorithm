function solution(survey, choices) {
    const test = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    survey.forEach((x, i) => {
        let agree = x[1];
        let disagree = x[0];
        if(choices[i] === 4) {
            return;
        } else if(choices[i] > 4) {
            test[agree] += choices[i] - 4;
        } else if(choices[i] < 4) {
            test[disagree] += 4 - choices[i];
        }
    });
    let result = '';
    test['R'] >= test['T'] ? result += 'R' : result += 'T';
    test['C'] >= test['F'] ? result += 'C' : result += 'F';
    test['J'] >= test['M'] ? result += 'J' : result += 'M';
    test['A'] >= test['N'] ? result += 'A' : result += 'N';
    return result;
}