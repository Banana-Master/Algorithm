function solution(my_string, alp) {
    return [...my_string].map((char) => {
        if(char == alp) {
            return char.toUpperCase();
        }
        return char;
    }).join('');
}