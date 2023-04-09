const solution = (keyinput, board) => {
    let answer = [0, 0];
    const max_x = (board[0] - 1) / 2;
    const max_y = (board[1] - 1) / 2;
    
    for(let i = 0; i < keyinput.length; i++) {
        if(keyinput[i] == 'up' && answer[1] < max_y) {
            answer[1]++;
        } else if(keyinput[i] == 'down' && answer[1] > -max_y) {
            answer[1]--;
        } else if(keyinput[i] == 'left' && answer[0] > -max_x) {
            answer[0]--;
        } else if(keyinput[i] == 'right' && answer[0] < max_x) {
            answer[0]++;
        }
    }
    return answer;
}
