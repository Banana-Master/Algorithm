const solution = (name, yearning, photo) => {
    let scores = [];
    for (let i = 0; i < photo.length; i++) {
        let totalScore = 0;
        for (let j = 0; j < name.length; j++) {
            if (photo[i].indexOf(name[j]) !== -1) {
                totalScore += yearning[j];
            }
        }
        scores.push(totalScore);
    }
    return scores;
}
