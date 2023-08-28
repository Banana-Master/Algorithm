function solution(players, callings) {
    const startRanks = {}; 
    const currentRanks = [...players];

    players.forEach((player, index) => {
        startRanks[player] = index;
    });

    callings.forEach(calling => {
        const currentIndex = startRanks[calling];
        if (currentIndex > 0) {
            const targetIndex = currentIndex - 1;
            const targetPlayer = currentRanks[targetIndex];

            currentRanks[targetIndex] = calling;
            currentRanks[currentIndex] = targetPlayer;

            startRanks[calling] = targetIndex;
            startRanks[targetPlayer] = currentIndex;
        }
    });

    return currentRanks;
}
